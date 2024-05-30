import { cn } from "@/lib/utils";

export function CardGrid({ children, className = "", ...rest }) {
  const classNames = cn("grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3", className);
  return <div className={classNames}>{children}</div>;
}
