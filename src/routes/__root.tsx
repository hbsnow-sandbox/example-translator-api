import { BaseLayout } from "@/components/layouts/base-layout";
import { TanStackRouterDevtools } from "@/lib/tan-stack-router-devtools";
import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <BaseLayout>
      <Outlet />
      <ScrollRestoration />
      <TanStackRouterDevtools />
    </BaseLayout>
  ),
});
