import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { AIResourceTag, AIResourceTagColors } from "./types";

export function TagBadge({
  t,
  className = "",
  includeHovers = false,
}: {
  t: AIResourceTag;
  className?: string;
  includeHovers?: boolean;
}) {
  const hoverClassNames = `hover:brightness-125 cursor-pointer`;
  const classNames = cn(
    `${AIResourceTagColors[t]} hover:${AIResourceTagColors[t]} text-background dark:text-foreground font-mono text-xs truncate cursor-auto`,
    includeHovers ? hoverClassNames : "",
    className
  );
  return <Badge className={classNames}>{t}</Badge>;
}
