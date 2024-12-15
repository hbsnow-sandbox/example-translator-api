import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trans, useLingui } from "@lingui/react/macro";

const alertData = [
  {
    id: "1",
    message: "製品 E の不良率が上昇傾向",
    severity: "medium",
  },
  {
    id: "2",
    message: "エネルギー消費が閾値を超えています",
    severity: "medium",
  },
  {
    id: "3",
    message: "ライン A の生産効率が目標値未達",
    severity: "high",
  },
];

export const Alert = () => {
  const { t } = useLingui();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">
          <Trans>最近のアラート</Trans>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {alertData.map((alert) => (
            <li key={alert.id} className="flex items-center space-x-2">
              <Badge
                variant={alert.severity === "high" ? "destructive" : "outline"}
              >
                {alert.severity === "high" ? t`緊急` : t`警告`}
              </Badge>
              <span className="text-sm sm:text-base">{alert.message}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
