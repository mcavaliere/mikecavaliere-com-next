import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import { Container } from "@chakra-ui/react";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Container bg="pink">
        <Alert preview={preview} />
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
}
