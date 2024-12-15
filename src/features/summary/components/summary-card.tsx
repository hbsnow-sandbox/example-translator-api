import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  icon: React.ReactNode;
  value: number;
  unit?: string;
  trend: string;
};

export const SummaryCard = ({ title, icon, value, unit, trend }: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-xl font-bold sm:text-2xl">
          {value}
          {unit && <span className="pl-1 text-sm font-normal">{unit}</span>}
        </div>
        <p className="text-xs text-muted-foreground">{trend}</p>
      </CardContent>
    </Card>
  );
};
