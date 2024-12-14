import { Summary } from "@/features/summary";
import { ProductionLine } from "@/features/production-line";
import { Inventory } from "@/features/inventory";
import { Alert } from "@/features/alert";

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold sm:text-3xl">
          製造サンプルダッシュボード
        </h1>
        <div className="mt-4 sm:mt-6">
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
    </div>
  );
};
