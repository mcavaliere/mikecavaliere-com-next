import { cn } from "@/lib/utils";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";

export function ContactLinks({ className = "" }) {
  const classNames = cn(
    "flex flex-row gap-3 my-3 mx-auto md:mt-10 w-full justify-center",
    className
  );

  return (
    <div className={classNames}>
      <Link href="https://twitter.com/mcavaliere" passHref target="_blank">
        <Button size="lg" aria-label="Follow me on Twitter" className="bg-[#2BC2FA]">
          <FaTwitter className="text-white" />
        </Button>
      </Link>
      <Link href="https://www.linkedin.com/in/mikecavaliere" target="_blank" passHref>
        <Button size="lg" aria-label="Follow me on LinkedIn" className="bg-[#0077b5]">
          <FaLinkedinIn className="text-white" />
        </Button>
      </Link>
      <Link href="https://github.com/mcavaliere" passHref target="_blank">
        <Button size="lg" aria-label="Follow me on GitHub" className="bg-[#24292e]">
          <FaGithub className="text-white" />
        </Button>
      </Link>
    </div>
  );
}
