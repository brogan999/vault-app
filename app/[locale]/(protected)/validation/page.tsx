import { getValidationMetrics } from "@/app/actions/validation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RecomputeButton } from "./recompute-button";

export default async function ValidationPage() {
  const metrics = await getValidationMetrics();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-medium font-serif text-foreground mb-2">
            Validation dashboard
          </h1>
          <p className="text-muted-foreground">
            Psychometric validation metrics (Cronbach&apos;s α, item-total correlation) from <code>item_responses</code>. Recompute after every N=100 completions. Target α ≥ 0.70; flag items with r &lt; 0.30.
          </p>
        </div>
        <RecomputeButton />
      </div>

      {metrics.length === 0 ? (
        <Card className="border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">No metrics yet</CardTitle>
            <CardDescription>
              Run the validation job when you have at least 100 completions per assessment. Metrics will appear here after computation.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <Card className="border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">Stored metrics</CardTitle>
            <CardDescription>
              Latest validation metrics by assessment and scale.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left">
                    <th className="py-2 pr-4">Assessment</th>
                    <th className="py-2 pr-4">Metric</th>
                    <th className="py-2 pr-4">Scale</th>
                    <th className="py-2 pr-4">Value</th>
                    <th className="py-2 pr-4">N</th>
                    <th className="py-2">Computed</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((m) => (
                    <tr key={m.id} className="border-b">
                      <td className="py-2 pr-4">{m.assessment_type}</td>
                      <td className="py-2 pr-4">{m.metric_name}</td>
                      <td className="py-2 pr-4">{m.scale_name ?? "—"}</td>
                      <td className="py-2 pr-4">{m.value}</td>
                      <td className="py-2 pr-4">{m.sample_size ?? "—"}</td>
                      <td className="py-2 text-muted-foreground">
                        {new Date(m.computed_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
