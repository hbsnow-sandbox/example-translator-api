import { createLazyFileRoute } from "@tanstack/react-router";
import { DashBoard } from "../index.lazy";

export const Route = createLazyFileRoute("/en/")({
  component: Index,
});

function Index() {
  return <DashBoard />;
}
