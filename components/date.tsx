import { parseISO, format } from "date-fns";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

export default function Date({ dateString, className = "" }) {
  const date = parseISO(dateString);
  const classNames = cn("", className);
  return (
    <Badge className={classNames}>
      <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>
    </Badge>
  );
}
