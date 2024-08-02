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
  const hoverClassNames = `hover:${AIResourceTagColors[t]} hover:brightness-125`;
  const classNames = cn(
    `${AIResourceTagColors[t]} text-background dark:text-foreground font-mono text-xs truncate`,
    includeHovers ? hoverClassNames : "",
    className
  );
  return <Badge className={classNames}>{t}</Badge>;
}
