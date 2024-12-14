import { createLazyFileRoute } from "@tanstack/react-router";
import { Summary } from "@/features/summary";
import { ProductionLine } from "@/features/production-line";
import { Inventory } from "@/features/inventory";
import { Alert } from "@/features/alert";

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
  return <DashBoard />;
}
