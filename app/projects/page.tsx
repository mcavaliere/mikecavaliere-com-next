import { HStack, Button, Box, Flex } from "@chakra-ui/react";
import CoverImage from "components/cover-image";
import { CardGrid } from "components/CardGrid";
import { CardContent } from "components/ui/card";
import { Projects } from "data/projects";
import { Project } from "lib/types";
import { Heading1, Heading2, P } from "components/Headings";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { ArticleCard } from "@/components/ui/card";

export type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const { title, imageUrl, description, imageWidth, imageHeight, url } = project;
  return (
    <ArticleCard key={title}>
      {title && imageUrl && imageWidth && imageHeight && (
        <CoverImage title={title} src={imageUrl} width={imageWidth} height={400} />
      )}

      <CardContent>
        <Heading2 size="md" className="mb-3">
          {title}
        </Heading2>

        {description ? <p className="flex flex-col flex-1">{description}</p> : null}

        <div className="flex flex-row justify-end mt-4 gap-3">
          {project["url"] ? (
            <Button as="a" href={project["url"]} size="sm" target="_blank" rightIcon={<FaGlobe />}>
              Website
            </Button>
          ) : null}
          {project["githubUrl"] ? (
            <Button as="a" href={project["url"]} size="sm" target="_blank" rightIcon={<FaGithub />}>
              GitHub
            </Button>
          ) : null}
        </div>
      </CardContent>
    </ArticleCard>
  );
}

export default function TalksPage() {
  return (
    <>
      <section id="talks">
        <Heading1 className="text-center mb-4">Projects</Heading1>

        <CardGrid mb={10}>
          {Projects.map((talk) => (
            <ProjectCard key={talk.title} project={talk} />
          ))}
        </CardGrid>
      </section>
    </>
  );
}
