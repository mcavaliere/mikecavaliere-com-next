import { BackLink } from "@/components/BackLink";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BackLink href="/posts" />
      {children}
    </div>
  );
}
