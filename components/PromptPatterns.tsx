import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PromptPattern, promptPatterns } from "@/data/prompt-patterns";
import { Heading3, Heading4 } from "./Headings";

const patterns = promptPatterns.sort((a, b) => a.name.localeCompare(b.name));

export function PromptPatternsList({ children, ...props }: { children: React.ReactNode }) {
  return (
    <ul className="mb-2 list-disc pl-4" {...props}>
      {children}
    </ul>
  );
}
export function PromptPatterns() {
  return (
    <Accordion type="multiple">
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
            <AccordionTrigger>{name}</AccordionTrigger>
            <AccordionContent>
              <div className="p-4 rounded-md bg-purple-100">
                <Heading3 className="mb-4">{name}</Heading3>

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

                <Heading4 className="mb-2">Why it's useful</Heading4>

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
