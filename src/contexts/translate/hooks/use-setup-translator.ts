import { use, useEffect, useTransition } from "react";
import { TranslatorContext } from "../context";

const options = {
  sourceLanguage: "ja",
  targetLanguage: "en",
} as const;

export const useSetupTranslator = () => {
  const translator = use(TranslatorContext);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const trans = await window.translation.createTranslator(options);

      if (translator && translator.current == null) {
        translator.current = trans;

        const canTranslate = await window.translation.canTranslate(options);

        // modelのダウンロードが終わるまで待機
        if (canTranslate === "after-download") {
          await translator.current.ready;
        }
      }
    });
  }, [translator]);

  return [isPending] as const;
};
