import me from "./assets/me.jpg";

const App = () => {
  return (
    <div className="flex bg-neutral-950 text-white">
      <div className="flex w-1/2 flex-col justify-center px-8">
        <h1 className="text-4xl font-bold">This is Jeffrey.</h1>
        <p className="mt-4">
          Coming from Waterloo, Jeffrey Zang is a programmer, event organizer,
          and advocate for youth initatives. Having completed two tech
          internships and currently on his third, Jeffrey focuses on front-end
          development with React, JS/TS, and Tailwind. He's worked with dozens
          of organizations to build software that wows.
          <br />
          <br />
          Jeffrey has attended and organized thirteen hackathons, working in
          teams such as operations, sponsorship, and development. He's Co-Chair
          of Hack the 6ix, Toronto's largest hackathon, welcoming 2K+ hackers
          over its lifespan.
          <br />
          <br />
          He's currently working with a fifty-person global team to organize
          EclipseExpo: the largest youth-led event on the planet. In October
          2024, EclipseExpo will welcome 1000 attendees to celebrate youth
          innovation.
          <br />
          <br />
          If you meet him at a conference, he'll be happy to talk about jazz
          music or the Green brothers, and will gladly roast a website for you.
          <div>
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
        className="h-screen w-1/2 object-cover grayscale transition-all hover:grayscale-0"
      />
    </div>
  );
};

export default App;
