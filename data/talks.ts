export enum VideoType {
  YOUTUBE = "youtube",
}

export type Talk = {
  title: string;
  videoUrl?: string;
  videoType?: VideoType;
  description?: string;
  slidesUrl?: string;
  imageUrl?: string;
  presentedAt?: string;
};

export const Talks: Talk[] = [
  {
    imageUrl: "/images/talks/growing-engineers-with-paid-investment-time.png",
    presentedAt: "Craft Conference 2022",
    slidesUrl:
      "https://www.slideshare.net/mcavaliere/growing-engineers-with-paid-investment-timepdf",
    title: "Growing Engineers with Weekly Investment Time",
    videoType: VideoType.YOUTUBE,
    videoUrl: "https://www.youtube.com/watch?v=vjrgNuxkdOo",
  },
  {
    presentedAt: "Prisma Day 2021",
    slidesUrl:
      "https://www.slideshare.net/mcavaliere/indiehacking-a-jamstack-saas-apppdf",
    title: "IndieHacking a Jamstack SaaS App",
    videoUrl: "https://www.youtube.com/watch?v=4r75wcg0Fd8&ab_channel=Prisma",
  },
  {
    imageUrl: "/images/talks/brain-hacks-and-upgrades-presentation.jpg",
    slidesUrl:
      "https://www.slideshare.net/mcavaliere/adhd-technology-brain-hacks-and-upgrades-251929870",
    title: "ADHD & Technology: Brain Hacks and Upgrades",
    videoUrl: "https://www.infoq.com/presentations/adhd/",
    presentedAt: "QCon 2016",
  },
];
