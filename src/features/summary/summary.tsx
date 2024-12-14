import { SummaryCard } from "@/features/summary/summary-card";
import { Bell, Package, Percent, TrendingUp } from "lucide-react";

export const Summary = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      <SummaryCard
        title="総生産量"
        icon={<TrendingUp className="size-4 text-muted-foreground" />}
        value="1,530 個"
        trend="先月比 +5%"
      />
      <SummaryCard
        title="在庫回転率"
        icon={<Package className="size-4 text-muted-foreground" />}
        value="12.5"
        trend="先月比 +2%"
      />
      <SummaryCard
        title="稼働率"
        icon={<Percent className="size-4 text-muted-foreground" />}
        value="89%"
        trend="先月比 -1%"
      />
      <SummaryCard
        title="品質合格率"
        icon={<Bell className="size-4 text-muted-foreground" />}
        value="98.5%"
        trend="先月比 +0.5%"
      />
    </div>
  );
};
