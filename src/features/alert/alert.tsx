import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { alertData } from "./alert-data";

const data = alertData.slice(0, 3);

export const Alert = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">最近のアラート</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {data.map((alert) => (
            <li key={alert.id} className="flex items-center space-x-2">
              <Badge
                variant={alert.severity === "high" ? "destructive" : "outline"}
              >
                {alert.severity === "high" ? "緊急" : "警告"}
              </Badge>
              <span className="text-sm sm:text-base">{alert.message}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button asChild>
          <ChevronDown className="mr-2 size-4" />
          もっと見る
        </Button>
      </CardFooter>
    </Card>
  );
};
