import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import { Container } from "@chakra-ui/react";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />

      <Alert preview={preview} />
      <main>{children}</main>

      <Footer />
    </>
  );
}
