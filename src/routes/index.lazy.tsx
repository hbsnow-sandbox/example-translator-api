import { createLazyFileRoute } from "@tanstack/react-router";
import { Summary } from "@/features/summary/components";
import { ProductionLine } from "@/features/production-line/components";
import { Inventory } from "@/features/inventory/components";
import { Alert } from "@/features/alert/components";
import { useEffect } from "react";
import { dynamicActivate } from "@/lib/dynamic-activate";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

export const DashBoard = () => {
  return (
    <div>
      <div>
        <Summary />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-6 lg:grid-cols-2">
        <div>
          <ProductionLine />
        </div>
        <div>
          <Inventory />
        </div>
      </div>
      <div className="mt-4 sm:mt-6">
        <Alert />
      </div>
    </div>
  );
};

function Index() {
  useEffect(() => {
    dynamicActivate("ja");
  }, []);

  return (
    <div lang="en" className="container mx-auto">
      <DashBoard />
    </div>
  );
}
