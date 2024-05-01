import { Link } from "@/components/Link";
import { FaArrowLeft } from "react-icons/fa";
export function BackLink({ href, ...props }: { href: string; [key: string]: any }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: "20px",
        fontWeight: "semibold",
      }}
    >
      <Link href={href} display="flex" flexDirection="row" alignItems="center" fontWeight="semibold" {...props}>
        <FaArrowLeft style={{ marginRight: "5px" }} />
        Back
      </Link>
    </div>
  );
}
