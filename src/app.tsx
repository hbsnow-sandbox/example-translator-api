import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { dynamicActivate } from "./lib/dynamic-activate";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

dynamicActivate("ja");

export const App = () => (
  <I18nProvider i18n={i18n}>
    <RouterProvider router={router} />
  </I18nProvider>
);
