// https://developer.chrome.com/docs/ai/translator-api
declare global {
  interface TranslatorOptions {
    sourceLanguage: Intl.UnicodeBCP47LocaleIdentifier;
    targetLanguage: Intl.UnicodeBCP47LocaleIdentifier;
  }

  type TranslationAvailability = "no" | "readily" | "after-download";

  interface Translation {
    canTranslate(options: TranslatorOptions): Promise<TranslationAvailability>;
    createTranslator(options: TranslatorOptions): Promise<Translator>;
  }

  interface Translator extends EventTarget {
    ready: Promise<undefined>;
    ondownloadprogress(evt: Event): void;
    translate(input: string): Promise<string>;
  }

  interface WindowOrWorkerGlobalScope {
    translation: Translation;
  }
}

export type {};
