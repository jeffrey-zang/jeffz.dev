import me from "../assets/me.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import links from "../data/links.data";

const Index = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-black">
      <div className="mx-auto flex flex-col-reverse md:flex-row">
        <img
          src={me}
          alt="me"
          className="h-screen w-full object-cover opacity-80 transition-all hover:opacity-100 hover:grayscale-0 md:w-1/2 md:grayscale"
        />
        <div className="flex w-full max-w-[40rem] flex-col justify-center p-8 opacity-80 transition-all hover:opacity-100 hover:grayscale-0 md:w-1/2 md:grayscale">
          <h1 className="text-4xl font-bold">
            This is <span className="text-red-400">Jeffrey</span>.
          </h1>
          <p className="mt-4">
            Coming from Waterloo, Jeffrey Zang is a{" "}
            <a
              href="https://go.jeffz.dev/github"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 underline"
            >
              programmer
            </a>
            , event organizer, and advocate for youth initiatives. Having
            completed <strong>two tech internships</strong> and currently on his
            third, Jeffrey focuses on front-end development with React, JS/TS,
            and Tailwind. He’s worked with dozens of organizations to build{" "}
            <strong className="gradient">software that wows</strong>.
            <br />
            <br />
            Jeffrey has attended and organized{" "}
            <strong className="text-blue-400">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://top.mlh.io/2023/profiles/jeffrey-zang"
                className="underline"
              >
                thirteen hackathons
              </a>
            </strong>
            , working in teams such as operations, sponsorship, and development.
            He’s Co-Chair of{" "}
            <a
              className="text-[#3CCCC6] underline"
              href="https://hackthe6ix.com/"
              target="_blank"
              rel="noreferrer"
            >
              Hack the 6ix
            </a>
            , <strong>Toronto’s largest hackathon</strong>, welcoming 2K+
            hackers over its lifespan.
            <br />
            <br />
            He’s currently working with a fifty-person global team to organize{" "}
            <a
              className="text-[#8F70EF] underline"
              href="https://eclipseexpos.org"
              target="_blank"
              rel="noreferrer"
            >
              EclipseExpo
            </a>
            : the <strong>largest youth-led event</strong> on the planet. In
            October 2024, EclipseExpo will welcome 1000 attendees to celebrate
            youth innovation.
            <br />
            <br />
            If you meet him at a conference, he’ll be happy to talk about jazz
            music or the Green brothers, and will gladly roast a website for
            you.
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => {
                  navigate("/resume");
                }}
              >
                Resume
              </button>
              <button
                onClick={() => {
                  navigate("/projects");
                }}
              >
                Projects
              </button>
            </div>
            <button
              className="border-none p-0 text-xs opacity-50 hover:bg-transparent hover:text-white"
              onClick={() => setOpen(true)}
            >
              I want more links
            </button>
          </p>
        </div>
      </div>
      <div
        className={`${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-black text-white transition-opacity`}
      >
        <p className="text-2xl font-bold">More links</p>
        {links.map((link, index) => {
          return (
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              key={`link-${index}`}
              className="underline"
            >
              {link.name}
            </a>
          );
        })}
        <button onClick={() => setOpen(false)}>Okay</button>
      </div>
    </div>
  );
};

export default Index;
