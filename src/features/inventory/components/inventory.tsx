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
import { Trans } from "@lingui/react/macro";

const inventoryData = [
  { id: 1, product: "製品 A", quantity: 1000, status: "在庫あり" },
  { id: 2, product: "製品 B", quantity: 500, status: "在庫少" },
  { id: 3, product: "製品 C", quantity: 1500, status: "在庫あり" },
  { id: 4, product: "製品 D", quantity: 200, status: "緊急" },
  { id: 5, product: "製品 E", quantity: 800, status: "在庫あり" },
];

export const Inventory = () => {
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
  );
};