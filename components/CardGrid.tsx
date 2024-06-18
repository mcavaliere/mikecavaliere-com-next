import { cn } from "@/lib/utils";

export function CardGrid({ children, className = "", ...rest }) {
  const classNames = cn("flex flex-row flex-wrap justify-center gap-8 w-full", className);
  return <div className={classNames}>{children}</div>;
}
