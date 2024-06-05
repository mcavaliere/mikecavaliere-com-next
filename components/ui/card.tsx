import * as React from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Heading3 } from "@/components/Headings";

export const CARD_DEFAULT_CLASSNAMES = "rounded-lg shadow-xl bg-card text-card-foreground";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(CARD_DEFAULT_CLASSNAMES, className)} {...props} />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col flex-1 p-5", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export function ArticleCard({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={cn(CARD_DEFAULT_CLASSNAMES, "justify-start flex flex-col", className)}
      {...props}
    >
      {children}
    </article>
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

export function AINewsletterCard({ className = "", children, title, href, frequency }) {
  const classNames = cn("mb-4 bg-gradient-to-br from-background to-accent", className);
  return (
    <Card className={classNames}>
      <CardHeader className="flex-row gap-3 items-center">
        <Heading3>{title}</Heading3>
        <Badge variant="frequency">{frequency}</Badge>
        <a href={href}>🔗</a>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
