import { X } from "lucide-react";
import { Button } from "../ui/button";
import { SyntheticEvent } from "react";
import { TagBadge } from "./TagBadge";

export function FilterStateHeader({
  className = "",
  tag,
  category,
  onCloseClick,
}: {
  className?: string;
  tag?: string;
  category?: string;
  onCloseClick?: (e: SyntheticEvent) => void;
}) {
  return (
    <div className="w-full px-4 flex flex-row justify-between items-center bg-blue-200 text-primary-foreground dark:bg-muted-foreground dark:text-foreground">
      <label>
        <span className="text-sm font-bold mr-2">Filtered by:</span>
        {tag ? <TagBadge t={tag as any} /> : null}
      </label>
      <Button variant="ghost" onClick={onCloseClick} className="hover:bg-transparent">
        <X className="w-4 h-4" />
      </Button>
    </div>
  );
}
