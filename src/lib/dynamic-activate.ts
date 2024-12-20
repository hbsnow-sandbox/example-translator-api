import { i18n } from "@lingui/core"

export async function dynamicActivate(locale: "ja" | "en") {
  const { messages } = await import(`@/locales/${locale}/messages.ts`)
  i18n.loadAndActivate({ locale, messages })
}
