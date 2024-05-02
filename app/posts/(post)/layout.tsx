import { BackLink } from "@/components/BackLink";
import {PostHeaderContainer} from "@/components/post-header";

export default function PostLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <BackLink href="/posts" />
      <PostHeaderContainer />
      {props.children}
    </div>
  );
}
