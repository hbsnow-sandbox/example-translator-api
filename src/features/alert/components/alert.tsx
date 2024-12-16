import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trans, useLingui } from "@lingui/react/macro";
import { msg } from "@lingui/core/macro";
import { useTranslate } from "@/contexts/translate/hooks/use-translate";
import { useMemo } from "react";

const alertData = [
  {
    id: "1",
    message: "製品 E の不良率が上昇傾向",
    severity: "caution" as const,
  },
  {
    id: "2",
    message: "エネルギー消費が閾値を超えています",
    severity: "caution" as const,
  },
  {
    id: "3",
    message: "ライン C の生産効率が目標値未達",
    severity: "warning" as const,
  },
];

const statusMessages = {
  warning: msg`緊急`,
  caution: msg`警告`,
} as const;

export const Alert = () => {
  const { t } = useLingui();

  const messages = useMemo(() => alertData.map((alert) => alert.message), []);
  const translatedMessages = useTranslate(messages);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">
          <Trans>最近のアラート</Trans>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {alertData.map((alert, i) => (
            <li key={alert.id} className="flex items-center space-x-2">
              <Badge
                variant={
                  alert.severity === "warning" ? "destructive" : "outline"
                }
              >
                {t(statusMessages[alert.severity])}
              </Badge>
              <span className="text-sm sm:text-base">
                {translatedMessages.at(i)}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
