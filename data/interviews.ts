import { Interview, VideoType } from "lib/types";

export const Interviews: Interview[] = [
  {
    title:
      "JAMstack Radio - Ep. #79, Rethinking Your Stack with Mike Cavaliere of Echobind",
    description:
      "In episode 79 of JAMstack Radio, Brian speaks with Mike Cavaliere of Echobind. They discuss how Echobind leverages Jamstack tools for client projects, the importance of evaluating the tools in your stack, and Mike’s book Cut Into The Jamstack.",
    imageUrl: "/images/interviews/jamstack-radio.jpeg",
    videoUrl: "https://youtu.be/jmmWgtzvAfo",
    videoType: VideoType.YOUTUBE,
  },
  {
    title: "Prisma Online Meetup #8: Mike Cavaliere - Full Stack Jamstack Fun",
    description:
      "Mike will walk through building a functional Jamstack app using Next.js, Prisma, NextAuth.js, Chakra-UI, and other fun things.",
    imageUrl: "/images/interviews/prisma-meetup.jpeg",
    videoUrl: "https://youtu.be/II3a0WyIhXs",
    videoType: VideoType.YOUTUBE,
  },
  {
    title:
      "Engineered-Mind Podcast #70: The Jamstack – React & Next.js w/Mike Cavaliere",
    description:
      "A great chat with Jousef of Engineered-Mind, where we talk about software engineering, the web, and brain improvement.",
    imageUrl: "/images/interviews/engineered-mind.jpeg",
    videoUrl: "https://youtu.be/bema4XmhYVg",
    videoType: VideoType.YOUTUBE,
  },
  {
    title: "FSJam Podcast: Building Fullstack Jamstack SaaS w/Mike Cavaliere",
    description:
      "Mike Cavaliere is a Senior Software Engineer at Echobind. His upcoming book, Cut Into the Jamstack, utilizes Next.js, Prisma, and Vercel to build a photo collaboration app. In this episode we discuss his experience working on a range of client projects and the considerations behind the technology stack selected for the book.",
    imageUrl: "/images/interviews/fsjam-podcast.jpeg",
    videoUrl: "https://youtu.be/8j5MUDujdkM",
    videoType: VideoType.YOUTUBE,
  },
];
