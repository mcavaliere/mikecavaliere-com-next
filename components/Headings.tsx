import { cn } from "@/lib/utils";

export function Heading1({ children, className = "", ...props }) {
  const classNames = cn("font-bold text-3xl", className);
  return (
    <h1 className={classNames} {...props}>
      {children}
    </h1>
  );
}

export function Heading2({ children, className = "", ...props }) {
  const classNames = cn("font-bold text-2xl", className);
  return (
    <h2 className={classNames} {...props}>
      {children}
    </h2>
  );
}

export function Heading3({ children, className = "", ...props }) {
  const classNames = cn("font-bold text-xl", className);
  return (
    <h3 className={classNames} {...props}>
      {children}
    </h3>
  );
}

export function Heading4({ children, className = "", ...props }) {
  const classNames = cn("font-bold text-lg", className);
  return (
    <h4 className={classNames} {...props}>
      {children}
    </h4>
  );
}

export function P({ children, className = "", ...rest }) {
  const classNames = cn("font-bold text-2xl", className);
  return (
    <p className={classNames} {...rest}>
      {children}
    </p>
  );
}
