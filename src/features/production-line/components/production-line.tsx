import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Trans, useLingui } from "@lingui/react/macro";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const productionData = [
  { name: "A", production: 400 },
  { name: "B", production: 300 },
  { name: "C", production: 200 },
  { name: "D", production: 350 },
  { name: "E", production: 280 },
];

export const ProductionLine = () => {
  const { t } = useLingui();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">
          <Trans>生産ライン稼働状況</Trans>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            production: { label: t`生産量` },
          }}
          className="h-[280px] w-full"
        >
          <BarChart accessibilityLayer data={productionData}>
            <CartesianGrid />
            <XAxis dataKey="name" tickMargin={10} />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="production" maxBarSize={30} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
