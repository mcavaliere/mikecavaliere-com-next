import { BackLink } from "@/components/back-link";

export default function PostLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <BackLink href="/posts" />
      {props.children}
    </div>
  );
}
