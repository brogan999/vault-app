import { getDashboardData } from "@/app/actions/dashboard";
import { MirrorGrid } from "@/components/features/mirror/MirrorGrid";

export default async function MirrorPage() {
  const data = await getDashboardData();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">The Mirror</h1>
        <p className="text-muted-foreground">
          Your psychological profile at a glance. Drag widgets to reorder.
        </p>
      </div>

      <MirrorGrid profile={data.profile} journals={data.journals} />
    </div>
  );
}