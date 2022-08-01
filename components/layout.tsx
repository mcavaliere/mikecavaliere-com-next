import Alert from "./alert";
import Footer from "./footer";

import { Container } from "@chakra-ui/react";

export default function Layout({ preview, children }) {
  return (
    <>
      <Alert preview={preview} />
      <main>{children}</main>

      <Footer />
    </>
  );
}
