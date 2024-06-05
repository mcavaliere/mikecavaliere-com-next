import { Heading1, Heading2, P } from "@/components/Headings";

export default function Styleguide() {
  return (
    <div>
      <Heading1 className="mb-5">Styleguide</Heading1>

      <P>I&#39;ll centralize styles and UI elements here.</P>

      <Heading2 className="mb-3">Colors</Heading2>

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-primary p-4 text-primary-forground">Primary</div>
        <div className="bg-secondary p-4 text-secondary-foreground">Secondary</div>
        <div className="bg-muted p-4 text-muted-foreground">Muted</div>
        <div className="bg-destructive p-4 text-destructive-foreground">Destructive</div>
        <div className="bg-accent p-4 text-accent-foreground">Accent</div>
        <div className="bg-popover p-4 text-popover-foreground">Popover</div>
        <div className="bg-card p-4 text-card-foreground">Card</div>
        <div className="bg-cyan p-4 text-foreground">Cyan</div>
        <div className="bg-purple p-4 text-background">Purple</div>
        <div className="bg-purple-dark p-4 text-background">Purple Dark</div>
      </div>
    </div>
  );
}
