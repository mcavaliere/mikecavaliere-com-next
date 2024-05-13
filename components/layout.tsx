import Alert from "./alert";
import Footer from "./footer";

export default function Layout({ preview, children }) {
  return (
    <>
      <Alert preview={preview} />
      <main>{children}</main>

      <Footer />
    </>
  );
}
