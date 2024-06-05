import { Link } from "@/components/Link";
import { cn } from "@/lib/utils";
import { FaArrowLeft } from "react-icons/fa";
export function BackLink({ href, className = "", ...props }: { href: string; [key: string]: any }) {
  const classNames = cn(
    "flex flex-row items-center font-semibold no-underline hover:text-foreground hover:opacity-60 mb-8",
    className
  );
  return (
    <Link href={href} className={classNames} {...props}>
      <FaArrowLeft className="mr-3" />
      <span>Back</span>
    </Link>
  );
}
