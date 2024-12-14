import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const productionData = [
  { name: "ライン A", production: 400 },
  { name: "ライン B", production: 300 },
  { name: "ライン C", production: 200 },
  { name: "ライン D", production: 350 },
  { name: "ライン E", production: 280 },
];

export const ProductionLine = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">生産ライン稼働状況</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            production: { label: "生産量" },
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
