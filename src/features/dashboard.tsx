import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Bell, Package, Percent, TrendingUp } from "lucide-react";
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

const inventoryData = [
  { id: 1, product: "製品 A", quantity: 1000, status: "在庫あり" },
  { id: 2, product: "製品 B", quantity: 500, status: "在庫少" },
  { id: 3, product: "製品 C", quantity: 1500, status: "在庫あり" },
  { id: 4, product: "製品 D", quantity: 200, status: "緊急" },
  { id: 5, product: "製品 E", quantity: 800, status: "在庫あり" },
];

const alerts = [
  { id: 1, message: "ライン B のメンテナンスが必要です", severity: "high" },
  { id: 2, message: "製品 D の在庫が危険水準です", severity: "high" },
  { id: 3, message: "エネルギー消費が閾値を超えています", severity: "medium" },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <h1 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
        製造ダッシュボード
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">総生産量</CardTitle>
            <TrendingUp className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold sm:text-2xl">1,530 個</div>
            <p className="text-xs text-muted-foreground">先月比 +5%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">在庫回転率</CardTitle>
            <Package className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold sm:text-2xl">12.5</div>
            <p className="text-xs text-muted-foreground">先月比 +2%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">稼働率</CardTitle>
            <Percent className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold sm:text-2xl">89%</div>
            <p className="text-xs text-muted-foreground">先月比 -1%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">品質合格率</CardTitle>
            <Bell className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold sm:text-2xl">98.5%</div>
            <p className="text-xs text-muted-foreground">先月比 +0.5%</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">
              生産ライン稼働状況
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                production: {
                  label: "生産量",
                  color: "#f0f",
                },
              }}
              className="h-[280px] w-full"
            >
              <BarChart accessibilityLayer data={productionData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="production"
                  maxBarSize={30}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">在庫状況</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>製品</TableHead>
                  <TableHead>数量</TableHead>
                  <TableHead>状態</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventoryData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.product}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          item.status === "在庫あり"
                            ? "default"
                            : item.status === "在庫少"
                              ? "outline"
                              : "destructive"
                        }
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-4 sm:mt-6">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">最近のアラート</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {alerts.map((alert) => (
              <li key={alert.id} className="flex items-center space-x-2">
                <Badge
                  variant={
                    alert.severity === "high" ? "destructive" : "outline"
                  }
                >
                  {alert.severity === "high" ? "緊急" : "警告"}
                </Badge>
                <span className="text-sm sm:text-base">{alert.message}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
