import { createContext, RefObject } from "react";

export const TranslatorContext =
  createContext<RefObject<Translator | null> | null>(null);
