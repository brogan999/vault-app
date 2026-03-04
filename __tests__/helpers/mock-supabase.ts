import type { SupabaseClient } from "@supabase/supabase-js";

type Row = Record<string, unknown>;

interface QueryResult {
  data: Row[] | Row | null;
  error: { code?: string; message: string } | null;
  count?: number | null;
}

/**
 * Lightweight chainable mock for Supabase queries.
 *
 * Usage:
 *   const sb = mockSupabase({ chatSessions: [{ id: "s1" }] });
 *   sb.from("chatSessions").select("id").eq("userId", "u1")  -> resolves to { data: [...] }
 *
 * For `.insert()` calls, pass `insertResults` to control success/failure per table.
 */
export function mockSupabase(
  tables: Record<string, Row[]> = {},
  insertResults: Record<string, QueryResult> = {}
): SupabaseClient {
  function chainable(rows: Row[]): any {
    let filtered = [...rows];
    let countMode = false;
    let headMode = false;
    let limitN: number | null = null;
    let singleMode = false;

    const chain: any = {
      select(_cols?: string, opts?: { count?: string; head?: boolean }) {
        if (opts?.count === "exact") countMode = true;
        if (opts?.head) headMode = true;
        return chain;
      },
      eq(col: string, val: unknown) {
        filtered = filtered.filter((r) => r[col] === val);
        return chain;
      },
      in(col: string, vals: unknown[]) {
        filtered = filtered.filter((r) => vals.includes(r[col]));
        return chain;
      },
      gt(col: string, val: number) {
        filtered = filtered.filter((r) => (r[col] as number) > val);
        return chain;
      },
      gte(col: string, val: unknown) {
        filtered = filtered.filter((r) => (r[col] as string) >= (val as string));
        return chain;
      },
      order() { return chain; },
      limit(n: number) { limitN = n; return chain; },
      maybeSingle() { singleMode = true; return chain; },
      single() { singleMode = true; return chain; },

      then(resolve: (v: QueryResult) => void) {
        let data: Row[] | Row | null = filtered;
        if (limitN !== null) data = filtered.slice(0, limitN);
        if (singleMode) data = filtered[0] ?? null;
        if (headMode) data = null;
        const result: QueryResult = {
          data,
          error: null,
          ...(countMode ? { count: filtered.length } : {}),
        };
        resolve(result);
      },
    };
    return chain;
  }

  function updateChain(table: string, rows: Row[]) {
    let matchFilters: Array<[string, unknown]> = [];
    let updateData: Row = {};

    const chain: any = {
      update(data: Row) { updateData = data; return chain; },
      eq(col: string, val: unknown) { matchFilters.push([col, val]); return chain; },
      then(resolve: (v: QueryResult) => void) {
        for (const row of rows) {
          const matches = matchFilters.every(([col, val]) => row[col] === val);
          if (matches) Object.assign(row, updateData);
        }
        resolve({ data: null, error: null });
      },
    };
    return chain;
  }

  const sb = {
    from(table: string) {
      const rows = tables[table] ?? [];
      return {
        select: chainable(rows).select,
        insert(data: Row | Row[]) {
          if (insertResults[table]) {
            return { then: (r: (v: QueryResult) => void) => r(insertResults[table]) };
          }
          const arr = Array.isArray(data) ? data : [data];
          rows.push(...arr);
          return chainable(arr);
        },
        update(data: Row) {
          return updateChain(table, rows).update(data);
        },
        delete() {
          return chainable(rows);
        },
      };
    },
  } as unknown as SupabaseClient;

  return sb;
}
