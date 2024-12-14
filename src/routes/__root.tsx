import { BaseLayout } from "@/components/layouts/base-layout";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <BaseLayout>
      <Outlet />
      <TanStackRouterDevtools />
    </BaseLayout>
  ),
});
