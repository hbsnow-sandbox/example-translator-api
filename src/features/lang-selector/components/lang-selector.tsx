import { isTranslationSupported } from "@/config/support";
import { useEffect } from "react";
import { Link } from "@tanstack/react-router";

export const LangSelector = () => {
  useEffect(() => {
    if (!isTranslationSupported) {
      return;
    }

    const fn = async () => {
      // const result = await window.translation.canTranslate({
      //   sourceLanguage: "ja",
      //   targetLanguage: "en",
      // });
      // console.log(result);

      const translator = await self.translation.createTranslator({
        sourceLanguage: "ja",
        targetLanguage: "en",
      });

      const result = await translator.translate("日本語ですね");
      console.log(result);
    };

    fn();
  }, []);

  if (!isTranslationSupported) {
    return null;
  }

  return (
    <div>
      <Link to="/">ja</Link> / <Link to="/en">en</Link>
    </div>
  );
};
