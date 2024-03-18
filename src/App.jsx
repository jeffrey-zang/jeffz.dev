import me from "./assets/me.jpg";

const App = () => {
  return (
    <div className="flex bg-neutral-950 text-white">
      <div className="flex w-1/2 flex-col justify-center px-8 opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0">
        <h1 className="text-4xl font-bold">
          This is <span className="text-red-400">Jeffrey</span>.
        </h1>
        <p className="mt-4">
          Coming from Waterloo, Jeffrey Zang is a{" "}
          <a
            href="https://go.jeffz.dev/github"
            target="_blank"
            rel="noreferrer"
            className="underline text-green-400"
          >
            programmer
          </a>
          , event organizer, and advocate for youth initiatives. Having
          completed <strong>two tech internships</strong> and currently on his
          third, Jeffrey focuses on front-end development with React, JS/TS, and
          Tailwind. He’s worked with dozens of organizations to build{" "}
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
            className="underline text-[#3CCCC6]"
            href="https://hackthe6ix.com/"
            target="_blank"
            rel="noreferrer"
          >
            Hack the 6ix
          </a>
          , <strong>Toronto’s largest hackathon</strong>, welcoming 2K+ hackers
          over its lifespan.
          <br />
          <br />
          He’s currently working with a fifty-person global team to organize{" "}
          <a className='underline text-[#8F70EF]' href="https://eclipseexpos.org" target="_blank" rel="noreferrer">
            EclipseExpo
          </a>
          : the <strong>largest youth-led event</strong> on the planet. In
          October 2024, EclipseExpo will welcome 1000 attendees to celebrate
          youth innovation.
          <br />
          <br />
          If you meet him at a conference, he’ll be happy to talk about jazz
          music or the Green brothers, and will gladly roast a website for you.
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => {
                window.open("https://go.jeffz.dev/resume");
              }}
            >
              Resume
            </button>
            <button
              onClick={() => {
                window.open("https://go.jeffz.dev/in");
              }}
            >
              LinkedIn
            </button>
          </div>
        </p>
      </div>
      <img
        src={me}
        alt="me"
        className="h-screen w-1/2 object-cover opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
};

export default App;
