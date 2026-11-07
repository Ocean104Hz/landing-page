export function PendingBadge({ label = "รอการยืนยันข้อมูล", dark = false }: { label?: string; dark?: boolean }) {
  return (
    <span
      data-testid="pending-badge"
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${dark ? "bg-white/10 text-white/85" : "bg-lime-soft text-navy-ink"}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-lime" />
      {label}
    </span>
  );
}
