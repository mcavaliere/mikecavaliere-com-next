export function CardGrid({ children, ...rest }) {
  return <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">{children}</div>;
}
