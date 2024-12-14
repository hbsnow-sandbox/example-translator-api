import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { loadCatalog } from "./lib/load-catalog";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

loadCatalog("ja");

export const App = () => (
  <I18nProvider i18n={i18n}>
    <RouterProvider router={router} />
  </I18nProvider>
);
