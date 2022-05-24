import { getLayout } from "layouts/MaxWidthContainerLayout";
import { Heading1, Heading2 } from "components/Headings";

export default function AboutPage() {
  return (
    <>
      <Heading1>About Me</Heading1>
      <Heading2>
        Vero officiis dignissimos cum alias deserunt accusamus.
      </Heading2>
    </>
  );
}

AboutPage.getLayout = getLayout;
