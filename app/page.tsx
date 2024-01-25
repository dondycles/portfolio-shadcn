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
  TbBrandGithub,
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
    {
      name: "GitHub",
      link: "https://github.com/dondycles",
      icon: <TbBrandGithub />,
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
  const otherprojects = [
    {
      name: "Expen//Save",
      desc: "Simplify your finances with ease. Track expenses, set savings, and gain insights into your spending habits.",
      link: "https://expensave-shadcn.vercel.app",
      skills: [
        "NextJS",
        "Supabase",
        "shadcn/ui",
        "TailwindCSS",
        "TanStack Query",
      ],
      img: "/es.png",
      gh: "https://github.com/dondycles/expensave-shadcn",
    },
    {
      name: "My Official Website",
      desc: "A light website to showcase my music career.",
      link: "https://johnrodxpianist.site",
      skills: ["NextJS", "NextUI", "TailwindCSS", "Zustand"],
      img: "/jr.png",
      gh: "https://github.com/dondycles/johnrodxpianist",
    },
    {
      name: "Wheel Of Pearl",
      desc: "Web application you can use to help you decide in life.",
      link: "https://wheel-of-pearl.vercel.app/",
      skills: ["NextJS", "TailwindCSS"],
      img: "/wop.png",
      gh: "https://github.com/dondycles/wheel-of-pearl",
    },
    {
      name: "Tapxiety",
      desc: "A simple web game to ease your anxiety.",
      link: "https://tapxiety.vercel.app/",
      skills: ["NextJS", "NextUI", "TailwindCSS", "Zustand", "Framer Motion"],
      img: "/favicon.ico",
      gh: "https://github.com/dondycles/tapxiety",
    },
  ];
  return (
    <main className="w-full h-fit system-padding 6 space-y-4">
      {/* intro */}
      <Card>
        <CardHeader className="flex-row items-center gap-4">
          <Avatar className="w-24 h-24">
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
      {/* skills */}
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
                      <Progress className="h-2" value={skill.knowledge} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="justify-center gap-2"></CardFooter>
      </Card>
      {/* experiences */}
      <Card>
        <CardHeader>
          <CardTitle>Experiences</CardTitle>
        </CardHeader>
        <CardContent className="gap-4 flex-col items-start flex">
          {experiences.map((exp) => {
            return (
              <React.Fragment key={exp.job}>
                <div className="space-y-4">
                  <div className="flex flex-row gap-4 items-start">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={exp.img} />
                      <AvatarFallback>{exp.company}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-lg">{exp.job}</p>
                      <p className="">{exp.company}</p>
                      <p className="text-muted-foreground text-sm">
                        {exp.date}
                      </p>
                    </div>
                  </div>
                  <p>{exp.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {exp.skills.map((skill) => {
                      return (
                        <Badge key={skill} variant="default">
                          {skill}
                        </Badge>
                      );
                    })}
                  </div>
                  {exp.links.length ? (
                    <div className="flex flex-row flex-wrap gap-2 items-center text-sm">
                      {exp.links.map((link) => {
                        return (
                          <Link
                            key={link.link}
                            href={link.link}
                            target="_blank"
                            className="underline flex items-center gap-1 "
                          >
                            {link.name}
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
                <Separator className="last:hidden" />
              </React.Fragment>
            );
          })}
        </CardContent>
      </Card>
      {/* projects */}
      <Card>
        <CardHeader>
          <CardTitle>Other Projects</CardTitle>
          <CardDescription>
            These are the projects I made outside of work or academics. In
            short, just for fun.
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-4 flex-col items-start flex">
          {otherprojects.map((project) => {
            return (
              <React.Fragment key={project.name}>
                <div className="space-y-4">
                  <div className="flex flex-row gap-4">
                    <Avatar className="w-16 h-16 bg-black">
                      <AvatarImage src={project.img} />
                      <AvatarFallback>{project.name}</AvatarFallback>
                    </Avatar>
                    <div className="flex gap-2 items-center">
                      <Link
                        href={project.link}
                        target="_blank"
                        className="font-semibold text-lg flex items-center gap-1"
                      >
                        {project.name}
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <Separator orientation="vertical" className="h-4" />

                      <Link
                        href={project.gh}
                        target="_blank"
                        className="text-2xl"
                      >
                        <TbBrandGithub />
                      </Link>
                    </div>
                  </div>

                  <p>{project.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.skills.map((skill) => {
                      return (
                        <Badge key={skill} variant="default">
                          {skill}
                        </Badge>
                      );
                    })}
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
