import { Button } from "components/ui/button";
import CoverImage from "components/cover-image";
import { CardGrid } from "components/card-grid";
import { CardContent } from "components/ui/card";
import { Projects } from "data/projects";
import { Project } from "lib/types";
import { Heading1, Heading2, P } from "components/headings";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { ArticleCard } from "@/components/ui/card";
import Link from "next/link";

export type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const { title, imageUrl, description, imageWidth, imageHeight } = project;
  return (
    <ArticleCard key={title}>
      {title && imageUrl && imageWidth && imageHeight && (
        <div className="min-h-56 w-full flex justify-center items-center">
          <CoverImage
            title={title}
            src={imageUrl}
            width={imageWidth}
            height={400}
            className="object-center mx-auto"
          />
        </div>
      )}

      <CardContent>
        <Heading2 size="md" className="mb-3">
          {title}
        </Heading2>

        {description ? <p className="flex flex-col flex-1">{description}</p> : null}

        <div className="flex flex-row justify-end mt-4 gap-3">
          {project["url"] ? (
            <Link href={project["url"]} passHref target="_blank">
              <Button size="sm" className="font-semibold">
                Website
                <FaGlobe className="ml-2" />
              </Button>
            </Link>
          ) : null}

          {project["githubUrl"] ? (
            <Link href={project["url"]} passHref target="_blank">
              <Button size="sm" className="font-semibold">
                GitHub
                <FaGithub className="ml-2" />
              </Button>
            </Link>
          ) : null}
        </div>
      </CardContent>
    </ArticleCard>
  );
}

export default function TalksPage() {
  return (
    <>
      <section id="talks" className="mb-10">
        <Heading1 className="text-center my-10">Projects</Heading1>

        <Heading2 className="mb-20 font-normal text-center">
          Software I&#39;ve built, and content I&#39;ve created.
        </Heading2>

        <CardGrid mb={10}>
          {Projects.map((talk) => (
            <ProjectCard key={talk.title} project={talk} />
          ))}
        </CardGrid>
      </section>
    </>
  );
}
