export function MaxWidthContainer({ children, ...props }) {
  return (
    <div className="container p-4 flex flex-col" {...props}>
      {children}
    </div>
  );
}
