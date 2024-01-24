import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaXTwitter } from "react-icons/fa6";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandYoutube,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandSvelte,
} from "react-icons/tb";
import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";
import { ExternalLink } from "lucide-react";
export default function Home() {
  const socials = [
    {
      name: "Facebook",
      link: "https://facebok.com/dondycles",
      icon: <TbBrandFacebook />,
    },
    {
      name: "X",
      link: "https://x.com/dondycles",
      icon: <FaXTwitter />,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/dondycles",
      icon: <TbBrandInstagram />,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/john-rod-dondoyano",
      icon: <TbBrandLinkedin />,
    },
    {
      name: "YouTube",
      link: "https://youtube.com/johnroddondoyano",
      icon: <TbBrandYoutube />,
    },
  ];
  const skills = [
    { skill: "HTML", knowledge: 80, icons: [<TbBrandHtml5 />] },
    { skill: "CSS", knowledge: 80, icons: [<TbBrandCss3 />] },
    { skill: "TailwindCSS", knowledge: 60, icons: [<TbBrandTailwind />] },
    {
      skill: "JS/TS",
      knowledge: 50,
      icons: [<TbBrandJavascript />, <TbBrandTypescript />],
    },
    {
      skill: "NextJS/React",
      knowledge: 50,
      icons: [<TbBrandNextjs />, <TbBrandReact />],
    },
    { skill: "SvelteKit", knowledge: 20, icons: [<TbBrandSvelte />] },
  ];
  const experiences = [
    {
      date: "Jul 2023 - Nov 2023",
      company: "HeroeZ!",
      job: "Front-End Web Dev.",
      img: "/hz.jpg",
      skills: ["NextJS", "ViteJS", "TailwindCSS"],
      desc: "Built a website for showcasing and minting NFTs. I build the website with NextJS while the minting page was built with ViteJS.",
      links: [
        { link: "https://heroe-z-kousei.vercel.app", name: "Main Website" },
        {
          link: "https://herorez-mint-vite.vercel.app/",
          name: "Minting Website",
        },
      ],
    },
    {
      date: "Feb 2023 - May 2023",
      company: "MGHS Solution And Advertising Services",
      job: "Junior Web Dev. (Internship)",
      img: "/mghs.jpg",
      skills: ["WordPress", "Elementor", "MS Excel"],
      desc: "Maintained, updated, and redesigned a client's WordPress website. ",
      links: [
        {
          link: "https://themghs.com",
          name: "Official Website",
        },
      ],
    },
    {
      date: "Jul 2022 - Dec 2022",
      company: "Studio CXGNUS",
      job: "Front-End Web Dev.",
      img: "/studiocxgnus.jpg",
      skills: ["HTML", "CSS", "Vanilla JS", "NextJS", "TailwindCSS"],
      desc: "Built a website for showcasing and minting NFTs. I build the website with Vanilla JS only but later on I learned NextJS and remade it with NextJS.",
      links: [
        {
          link: "https://studiocxgnus-vanilla.vercel.app/",
          name: "Vanilla JS Website",
        },
        {
          link: "https://studiocxgnus-react.vercel.app/",
          name: "React Version Website",
        },
      ],
    },
  ];
  return (
    <main className="w-full p-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-96 space-y-4">
      <Card>
        <CardHeader className="flex-row items-center gap-4">
          <Avatar>
            <AvatarImage src="/avatar1.jpg" />
            <AvatarFallback>JR</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>John Rod Dondoyano</CardTitle>
            <CardDescription>Front-End Web Developer</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="indent-4">
            I am a self-taught web developer who pulls up an all-nighter, holds
            a bachelor's degree in computer engineering. I split my time between
            music and exploring the world of web development. In fact, I
            achieved millions of views with my piano covers on YouTube.
          </p>
          <br />
          <p className="indent-4">
            I really enjoy developing and designing websites! Learning web
            development is hard at first but later on I managed to enhance my
            knowledge about HTML, CSS, and JavaScript from YouTube tutorials and
            online lessons.
          </p>
        </CardContent>
        <CardFooter className="justify-center gap-2">
          {socials.map((social) => {
            return (
              <Link className="text-2xl" target="_blank" href={social.link}>
                {social.icon}
              </Link>
            );
          })}
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>
              These are the skills I acquired from building websites out of
              curiousity, YouTube tutorials, and side project experiences.
            </TableCaption>

            <TableBody>
              {skills.map((skill) => {
                return (
                  <TableRow>
                    <TableCell className="flex flex-row items-center gap-2 w-fit">
                      <p>{skill.skill}</p>
                      <div className="flex flex-row text-2xl">
                        {skill.icons}
                      </div>
                    </TableCell>
                    <TableCell className="w-full">
                      <Progress value={skill.knowledge} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="justify-center gap-2"></CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Experiences</CardTitle>
        </CardHeader>
        <CardContent className="gap-4 flex-col items-start flex">
          {experiences.map((exp) => {
            return (
              <React.Fragment key={exp.job}>
                <div className="flex sm:flex-row flex-col gap-4 items-start">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={exp.img} />
                    <AvatarFallback>{exp.company}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg">{exp.job}</p>
                    <p className="">{exp.company}</p>
                    <p className="text-muted-foreground text-sm">{exp.date}</p>
                    <p className=" mt-2">{exp.desc}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {exp.skills.map((skill) => {
                        return (
                          <Badge key={skill} variant="default">
                            {skill}
                          </Badge>
                        );
                      })}
                    </div>
                    {exp.links.length ? (
                      <div className="flex flex-row gap-2 items-center mt-2 text-sm">
                        {exp.links.map((link) => {
                          return (
                            <Link
                              key={link.link}
                              href={link.link}
                              target="_blank"
                              className="underline flex items-center gap-1"
                            >
                              {link.name}
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
                <Separator className="last:hidden" />
              </React.Fragment>
            );
          })}
        </CardContent>
      </Card>
    </main>
  );
}
