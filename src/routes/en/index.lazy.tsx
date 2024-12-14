import { createLazyFileRoute } from "@tanstack/react-router";
import { DashBoard } from "../index.lazy";
import { useEffect } from "react";
import { loadCatalog } from "@/lib/load-catalog";

export const Route = createLazyFileRoute("/en/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    loadCatalog("en");
  }, []);

  return <DashBoard />;
}
