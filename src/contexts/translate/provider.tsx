import { useRef } from "react";
import { TranslatorContext } from "./context";

type Props = {
  children: React.ReactNode;
};

export function TranslatorProvider({ children }: Props) {
  const translator = useRef<Translator>(null);

  return <TranslatorContext value={translator}>{children}</TranslatorContext>;
}
