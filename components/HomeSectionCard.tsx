import { Button } from "./ui/button";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export type HomeSectionCardProps = {
  href: string;
  title: string;
  body: string;
  buttonText: string;
  emoji?: string;
};

export function HomeSectionCard({ emoji, href, title, body, buttonText }: HomeSectionCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-0">
        <CardTitle>
          {emoji} {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1">
        <p className="text-[#999999]">{body}</p>
      </CardContent>
      <CardFooter className="flex flex-0">
        <Button className="mt-2" size="cta">
          {buttonText}
          <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
}
