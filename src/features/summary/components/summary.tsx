import { SummaryCard } from "@/features/summary/components/summary-card";
import { Bell, Package, Percent, TrendingUp } from "lucide-react";
import { useLingui } from "@lingui/react/macro";

const summaryData = {
  production: { value: 1530, trend: 5 },
  inventory: { value: 12.5, trend: 2 },
  utilization: { value: 89, trend: -1 },
  quality: { value: 98.5, trend: 0.5 },
};

export const Summary = () => {
  const { t } = useLingui();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      <SummaryCard
        title={t`総生産量`}
        icon={<TrendingUp className="size-4 text-muted-foreground" />}
        value={summaryData.production.value}
        unit={t`個`}
        trend={t`先月比` + ` ${summaryData.production.trend}%`}
      />
      <SummaryCard
        title={t`在庫回転率`}
        icon={<Package className="size-4 text-muted-foreground" />}
        value={summaryData.inventory.value}
        trend={t`先月比` + ` ${summaryData.inventory.trend}%`}
      />
      <SummaryCard
        title={t`稼働率`}
        icon={<Percent className="size-4 text-muted-foreground" />}
        value={summaryData.utilization.value}
        unit="%"
        trend={t`先月比` + ` ${summaryData.utilization.trend}%`}
      />
      <SummaryCard
        title={t`品質合格率`}
        icon={<Bell className="size-4 text-muted-foreground" />}
        value={summaryData.quality.value}
        unit="%"
        trend={t`先月比` + ` ${summaryData.quality.trend}%`}
      />
    </div>
  );
};
