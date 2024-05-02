import { Heading, HStack, IconButton, Button } from "@chakra-ui/react";
import CoverImage from "components/cover-image";
import { CardGrid } from "components/CardGrid";
import { CardBody, CardContainer } from "components/Card";
import { Interviews } from "data/interviews";
import { Projects } from "data/projects";
import { Interview, Project, Talk } from "lib/types";
import { Heading1, Heading2, P } from "components/Headings";
import { FaGlobe } from "react-icons/fa";

export type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    imageUrl,
    description,
    imageWidth,
    imageHeight,
    url
  } = project;
  return (
    <CardContainer as="article" p={0} justify="flex-start" key={title}>
      {title && imageUrl && imageWidth && imageHeight && (
        <CoverImage
          title={title}
          src={imageUrl}
          width={imageWidth}
          height={imageHeight}
        />
      )}

      <CardBody display="flex" flexDirection="column" flex={1}>
        <Heading2 size="md" mb={3} fontWeight="bold">
          {title}
        </Heading2>

        {description ? (
          <P d="flex" flexDirection="column" flex={1}>
            {description}
          </P>
        ) : null}

        <HStack justifyContent="flex-end" mt={5}>
          {project["url"] ? (
            <Button
              as="a"
              href={project["url"]}
              size="sm"
              target="_blank"
              rightIcon={<FaGlobe />}
            >
              Website
            </Button>
          ) : null}
        </HStack>
      </CardBody>
    </CardContainer>
  );
}

export default function TalksPage() {
  return (
    <>
      <section id="talks">
        <Heading1 textAlign="center" mb={5}>
          Projects
        </Heading1>

        <CardGrid mb={10}>
          {Projects.map((talk) => (
            <ProjectCard key={talk.title} project={talk} />
          ))}
        </CardGrid>
      </section>

    </>
  );
}
