import { createLazyFileRoute } from "@tanstack/react-router";
import { DashBoard } from "../index.lazy";
import { useEffect } from "react";
import { dynamicActivate } from "@/lib/dynamic-activate";
import { useSetupTranslator } from "@/contexts/translate/hooks/use-setup-translator";

export const Route = createLazyFileRoute("/en/")({
  component: Index,
});

function Index() {
  const [isPending] = useSetupTranslator();

  useEffect(() => {
    dynamicActivate("en");
  }, []);

  return (
    <div lang="en" className="container mx-auto">
      {isPending ? <p>Loading...</p> : <DashBoard />}
    </div>
  );
}
