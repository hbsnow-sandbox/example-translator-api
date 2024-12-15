import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const LangSelector = () => {
  return (
    <div>
      <Button
        asChild
        className="rounded-e-none rounded-s-full border border-r-0 bg-secondary pl-6 text-primary hover:text-primary-foreground data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
      >
        <Link to="/">ja</Link>
      </Button>
      <Button
        asChild
        className="rounded-e-full rounded-s-none border border-l-0 bg-secondary pr-6 text-primary hover:text-primary-foreground data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
      >
        <Link to="/en">en</Link>
      </Button>
    </div>
  );
};
