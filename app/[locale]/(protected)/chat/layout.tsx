export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Chat bypasses MainStage's max-w-[1200px] constraint by using fixed
  // positioning that fills everything right of the NavRail.
  return (
    <div className="fixed inset-0 left-[72px] lg:left-[220px] z-10 flex bg-background">
      {children}
    </div>
  );
}
