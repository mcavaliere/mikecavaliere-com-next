import { Heading1 } from "components/Headings";

export default function PostTitle({ children, ...props }) {
  return <Heading1 {...props}>{children}</Heading1>;
}
