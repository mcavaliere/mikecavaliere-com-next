import { X } from "lucide-react";
import { Button } from "../ui/button";
import { channel } from "diagnostics_channel";
import { SyntheticEvent } from "react";

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
      <label className="">
        <span className="font-bold">Filtered by:</span>
        {category ? <span className="">Category: {category}</span> : null}
        {tag ? <span className="">Tag: {tag}</span> : null}
      </label>
      <Button variant="ghost" onClick={onCloseClick} className="hover:bg-transparent">
        <X className="w-4 h-4" />
      </Button>
    </div>
  );
}
