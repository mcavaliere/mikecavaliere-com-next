import Image from "next/image";
import { ContactLinks } from "components/ContactLinks";
import { Heading1, Heading2 } from "./Headings";

export const HERO_AVATAR_SIZES = {
  base: 200,
  md: 200,
  lg: 300,
};

function Strong({ children }) {
  return <strong className="font-semibold underline-hover">{children}</strong>;
}

export function HomeHero() {
  return (
    <div className="flex flex-col md:flex-row w-full mb-10">
      <div className="flex w-full md:w-1/2 justify-center items-center">
        <div className="relative rounded-full overflow-hidden w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-linear-to-br from-cyan via-purple-dark to-purple">
          <div className="relative rounded-full overflow-hidden w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border-10 border-transparent ">
            <Image
              src="/images/headshot 1024 square 72DPI.jpeg"
              priority
              alt="photo of Mike Cavaliere"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 text-center md:text-left">
        <div className="shadow" />
        <Heading1 className="mb-3">Hi, I&#39;m Mike Cavaliere.</Heading1>
        <Heading2 size="md" className="font-normal">
          I&#39;m a <Strong>technical strategist</Strong>, <Strong>software engineer</Strong>,{" "}
          <Strong>author</Strong> and <Strong>conference speaker</Strong>.
        </Heading2>

        <ContactLinks />
      </div>
    </div>
  );
}
