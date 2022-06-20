import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { Heading1, Heading2, P as Paragraph } from "components/Headings";

export function H1({ children, ...props }) {
  return <Heading1 {...props}>{children}</Heading1>;
}

export function H2({ children, ...props }) {
  return <Heading2 {...props}>{children}</Heading2>;
}

export function Gist(props) {
  console.log(`---------------- GIST:  `, props);
  // const [filename, obj] = Object.entries(files)[0];
  return "";
  // return (
  //   <>
  //     <Heading1>filename</Heading1>
  //     <P>{JSON.stringify(obj)}</P>
  //   </>
  // );
}

export function P({ children, ...props }) {
  return (
    <Paragraph mb={5} {...props}>
      {children}
    </Paragraph>
  );
}

export function DefaultRenderer({ children }) {
  return children;
}

export const rendererMap = {
  H1,
  H2,
  P,
  GIST: Gist,
};
