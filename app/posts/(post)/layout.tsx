import { BackLink } from "@/components/BackLink";

export default function PostLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <BackLink href="/posts" />
      {props.children}
    </div>
  );
}
