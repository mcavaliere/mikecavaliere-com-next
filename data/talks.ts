import { Talk, VideoType } from "lib/types";

export const Talks: Talk[] = [
  {
    description:
      "All about how companies can make more money by giving their people time to learn and invent.",
    imageUrl: "/images/talks/growing-engineers-with-paid-investment-time.png",
    imageHeight: 809,
    imageWidth: 1440,
    presentedAt: "Craft Conference 2022",
    slidesUrl:
      "https://www.slideshare.net/mcavaliere/growing-engineers-with-paid-investment-timepdf",
    title: "Growing Engineers with Weekly Investment Time",
    videoType: VideoType.YOUTUBE,
    videoUrl: "https://www.youtube.com/watch?v=vjrgNuxkdOo",
  },
  {
    description:
      "Stories and notes about building full-stack applications with Next.js.",
    imageHeight: 809,
    imageWidth: 1440,
    imageUrl: "/images/talks/indie-hacking-a-jamstack-saas-application.png",
    presentedAt: "Prisma Day 2021",
    slidesUrl:
      "https://www.slideshare.net/mcavaliere/indiehacking-a-jamstack-saas-apppdf",
    title: "IndieHacking a Jamstack SaaS App",
    videoUrl: "https://www.youtube.com/watch?v=4r75wcg0Fd8&ab_channel=Prisma",
  },
  {
    description:
      "Tips for working around our brains' limitations, and stories of brain improvement experiments.",
    imageHeight: 768,
    imageWidth: 1024,
    imageUrl: "/images/talks/brain-hacks-and-upgrades-presentation.jpeg",
    slidesUrl:
      "https://www.slideshare.net/mcavaliere/adhd-technology-brain-hacks-and-upgrades-251929870",
    title: "ADHD & Technology: Brain Hacks and Upgrades",
    videoUrl: "https://www.infoq.com/presentations/adhd/",
    presentedAt: "QCon 2016",
  },
];
