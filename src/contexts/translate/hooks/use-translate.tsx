import { startTransition, use, useEffect, useState } from "react";

import { TranslatorContext } from "../context";
import { useLingui } from "@lingui/react/macro";

export const useTranslate = (messages: string[]) => {
  const translator = use(TranslatorContext);

  const [translated, setTranslated] = useState(messages);

  const { i18n } = useLingui();

  useEffect(() => {
    if (i18n.locale === "ja") {
      return;
    }

    startTransition(async () => {
      const translatorInstance = translator?.current;
      if (translatorInstance == null) {
        return;
      }
      const results = await Promise.all(
        messages.map((message) => translatorInstance.translate(message)),
      );
      if (i18n.locale === "en") {
        setTranslated(results);
      }
    });
  }, [i18n.locale, messages, translator]);

  return translated;
};
