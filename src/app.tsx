import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { dynamicActivate } from "@/lib/dynamic-activate";
import { TranslatorProvider } from "@/contexts/translate/provider";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

await dynamicActivate("ja");

export const App = () => (
  <I18nProvider i18n={i18n}>
    <TranslatorProvider>
      <RouterProvider router={router} />
    </TranslatorProvider>
  </I18nProvider>
);
