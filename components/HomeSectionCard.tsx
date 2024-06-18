import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export type HomeSectionCardProps = {
  href: string;
  title: string;
  body: string;
  buttonText: string;
  emoji?: string;
};

export function HomeSectionCard({ emoji, href, title, body, buttonText }: HomeSectionCardProps) {
  return (
    <Card className="flex flex-col w-full sm:w-[calc(50%-2rem)] xl:w-[calc(33%-4rem)]">
      <CardHeader className="flex flex-0">
        <CardTitle>
          {emoji} {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1">
        <p>{body}</p>
      </CardContent>
      <CardFooter className="flex flex-0">
        <Link href={href} className="w-full">
          <Button className="mt-2" size="cta">
            {buttonText}
            <ArrowRight />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
