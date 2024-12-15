import { LangSelector } from "@/features/lang-selector/components";

type Props = {
  children: React.ReactNode;
};

export const BaseLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b p-4 sm:p-6">
        <div className="container flex items-center justify-between">
          <h1 className="text-2xl font-bold">製造サンプルダッシュボード</h1>
          <LangSelector />
        </div>
      </header>

      <main className="p-4 sm:p-6">{children}</main>
    </div>
  );
};
