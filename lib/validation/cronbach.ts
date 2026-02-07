/**
 * Cronbach's alpha per scale. Recompute after every N=100 completions.
 * Target α ≥ 0.70. Flag items with item-total correlation < 0.30.
 */

export function cronbachAlpha(itemScores: number[][]): number {
  const n = itemScores.length; // number of items
  if (n < 2) return 0;
  const k = itemScores[0]?.length ?? 0; // number of respondents
  if (k < 2) return 0;

  const itemMeans = itemScores.map((row) => row.reduce((a, b) => a + b, 0) / k);
  const totalScores = Array.from({ length: k }, (_, j) =>
    itemScores.reduce((sum, row) => sum + (row[j] ?? 0), 0)
  );
  const totalMean = totalScores.reduce((a, b) => a + b, 0) / k;
  const totalVariance =
    totalScores.reduce((s, t) => s + (t - totalMean) ** 2, 0) / k;

  let sumItemVariance = 0;
  for (let i = 0; i < n; i++) {
    const row = itemScores[i];
    if (!row) continue;
    const mean = itemMeans[i];
    const variance = row.reduce((s, v) => s + (v - mean) ** 2, 0) / k;
    sumItemVariance += variance;
  }

  if (totalVariance <= 0) return 0;
  const alpha = (n / (n - 1)) * (1 - sumItemVariance / totalVariance);
  return Math.round(alpha * 1000) / 1000;
}

export function itemTotalCorrelation(
  itemScores: number[][],
  itemIndex: number
): number {
  const k = itemScores[0]?.length ?? 0;
  if (k < 2) return 0;
  const totalScores = Array.from({ length: k }, (_, j) =>
    itemScores.reduce((sum, row, i) => sum + (i === itemIndex ? 0 : (row[j] ?? 0)), 0)
  );
  const row = itemScores[itemIndex];
  if (!row) return 0;
  const meanItem = row.reduce((a, b) => a + b, 0) / k;
  const meanTotal = totalScores.reduce((a, b) => a + b, 0) / k;
  let num = 0;
  let denA = 0;
  let denB = 0;
  for (let j = 0; j < k; j++) {
    const a = (row[j] ?? 0) - meanItem;
    const b = (totalScores[j] ?? 0) - meanTotal;
    num += a * b;
    denA += a * a;
    denB += b * b;
  }
  if (denA === 0 || denB === 0) return 0;
  return Math.round((num / Math.sqrt(denA * denB)) * 1000) / 1000;
}
