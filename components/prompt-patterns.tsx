import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { PromptPattern, promptPatterns } from "@/data/prompt-patterns";
import { Heading4 } from "./headings";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const patterns = promptPatterns.sort((a, b) => a.name.localeCompare(b.name));

const categories = {
  "Output Customization": "bg-red-800",
  "Error Identification": "bg-green-800",
  "Prompt Improvement": "bg-yellow-800",
  Interaction: "bg-blue-800",
  "Context Control": "bg-violet-800",
};

export function PromptPatternsList({ children, ...props }: { children: React.ReactNode }) {
  return (
    <ul className="mb-2 list-disc pl-4" {...props}>
      {children}
    </ul>
  );
}
export function PromptPatterns({ className = "" }) {
  const classNames = cn("mb-2 list-disc pl-4", className);

  return (
    <Accordion type="multiple" className={classNames}>
      {patterns.map(
        ({
          name,
          category,
          intent,
          motivation,
          structure,
          examples,
          consequences,
        }: PromptPattern) => (
          <AccordionItem value={name} key={name}>
            <AccordionTrigger
              className={cn(
                "grid grid-cols-[1fr_1fr_20px] items-center py-4 font-medium transition-all hover:no-underline hover:opacity-80 hover:-translate-x-1 hover:-translate-y-1 [&[data-state=open]>svg]:rotate-180"
              )}
            >
              <span className="text-left">{name}</span>

              <span className="text-left">
                <Badge
                  className={`${categories[category]} hover:${categories[category]} text-background dark:text-foreground justify-self-end`}
                >
                  {category}
                </Badge>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-4 rounded-md bg-accent">
                <Heading4 className="mb-2">Example</Heading4>

                <PromptPatternsList>
                  {examples.map((example, index) => (
                    <li key={index}>
                      <pre className="text-wrap">
                        <blockquote>{example}</blockquote>
                      </pre>
                    </li>
                  ))}
                </PromptPatternsList>

                <Heading4 className="mb-2">What it does</Heading4>

                <PromptPatternsList>
                  {intent.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </PromptPatternsList>

                <Heading4 className="mb-2">Why it&#39;s useful</Heading4>

                <PromptPatternsList>
                  {motivation.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </PromptPatternsList>

                <Heading4 className="mb-2">Structure &amp; Key Ideas</Heading4>

                <PromptPatternsList>
                  {structure.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </PromptPatternsList>

                <Heading4 className="mb-2">Pro & Con / Notes</Heading4>

                <PromptPatternsList>
                  {consequences.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </PromptPatternsList>
              </div>
            </AccordionContent>
          </AccordionItem>
        )
      )}
    </Accordion>
  );
}
