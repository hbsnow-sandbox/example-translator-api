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
import { Trans, useLingui } from "@lingui/react/macro";
import { msg } from "@lingui/core/macro";

const inventoryData = [
  {
    id: 1,
    product: "製品 A",
    quantity: 1000,
    status: "available" as const,
  },
  { id: 2, product: "製品 B", quantity: 500, status: "low" as const },
  { id: 3, product: "製品 C", quantity: 1500, status: "available" as const },
  { id: 4, product: "製品 D", quantity: 200, status: "warning" as const },
  { id: 5, product: "製品 E", quantity: 800, status: "available" as const },
];

const statusMessages = {
  available: msg`在庫あり`,
  low: msg`在庫少`,
  warning: msg`緊急`,
} as const;

export const Inventory = () => {
  const { t } = useLingui();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">
          <Trans>在庫状況</Trans>
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Trans>製品</Trans>
              </TableHead>
              <TableHead>
                <Trans>数量</Trans>
              </TableHead>
              <TableHead>
                <Trans>状態</Trans>
              </TableHead>
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
                      item.status === "available"
                        ? "default"
                        : item.status === "low"
                          ? "outline"
                          : "destructive"
                    }
                  >
                    {t(statusMessages[item.status])}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
