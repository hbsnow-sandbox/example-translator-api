import { createLazyFileRoute } from "@tanstack/react-router";
import { DashBoard } from "../index.lazy";
import { useEffect } from "react";
import { dynamicActivate } from "@/lib/dynamic-activate";

export const Route = createLazyFileRoute("/en/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    dynamicActivate("en");
  }, []);

  return <DashBoard />;
}
