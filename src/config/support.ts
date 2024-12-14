export const isTranslationSupported =
  "translation" in window && "createTranslator" in window.translation;
