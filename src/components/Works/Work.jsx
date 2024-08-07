import proGif1 from "../../assets/Project-gif/ViteReact-GoogleChrome2024-04-2503-23-44-ezgif.com-video-to-gif-converter.gif";
import proGif7 from "../../assets/Project-gif/comingsoon-ezgif.com-optimize.gif";
import proGif8 from "../../assets/Project-gif/proiamg.gif";
import proGif9 from "../../assets/Project-gif/weblogsWorkV-ezgif.com-video-to-gif-converter.gif";
import { RiGitRepositoryLine, RiGithubLine, RiLink } from "@remixicon/react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div>
      <div id="experience" className="h-auto w-full pt-12 py-0 md:p-12 ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-extrabold text-2xl md:text-4xl leading-none "
        >
          WORK & EXPERIENCE
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, width: "0%" }}
          animate={{ opacity: 1, width: "10%" }}
          transition={{ delay: 1, duration: 0.8 }}
          id="radial-bar1"
          className="h-2 md:h-4 w-12 md:w-20 bg-[#08D9D6] rounded-full "
        ></motion.div>
        <div data-scroll-direction="right">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="pt-8 text-xl leading-none md:text-3xl font-extrabold"
          >
            Freelance at Quolomb, Vijay Nagar (Indore)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="pt-6 pb-4 text-sm md:text-lg font-[gilroy-medium]"
          >
            <motion.b
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              👉I recently completed a freelance web development project for{" "}
              <a
                href="https://qoulomb.com/about/"
                target="__blank"
                className="text-blue-500 underline"
              >
                Quolomb.
              </a>
            </motion.b>
            In this project, I built a React.js application from the ground up,
            utilizing third-party libraries like React Router to enhance
            efficiency. I also deployed the finished project live on the
            internet. This project provided valuable insights into corporate
            work environments. It involved collaboration through Figma for
            design purposes, social meetings, group discussions, project
            management tools, and teamwork. The project involved building a web
            application for.
            <a
              href="https://theblunt.media/"
              target="__blank"
              className="text-blue-500 underline"
            >
              <b>The Blunt,</b>
            </a>
            a social media agency with over 200,000{" "}
            <a
              href="https://www.youtube.com/@TheBLUNT"
              target="__blank"
              className="text-blue-500 underline"
            >
              <b>subscribers.</b>
            </a>
            I'd like to express my gratitude to Quolomb for this fantastic
            opportunity and extend my interest in future collaborations with The
            Blunt.
          </motion.p>
        </div>
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="font-extrabold text-2xl md:text-4xl leading-none pt-16 "
          >
            CONTRIBUTIONS
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "10%" }}
            transition={{ delay: 1, duration: 0.8 }}
            id="radial-bar2"
            className="h-2 md:h-4 w-12 md:w-20 bg-[#FF2E63] rounded-full"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 md:w-80 p-4 md:p-6 shadow-lg shadow-zinc-500/50 rounded-2xl"
          >
            <h2 className="md:text-xl font-[gilroy-medium] ">
              <b>useApi (React Hook) - </b>
              This React API hook makes API fetching easier. It takes a URL as a
              parameter and returns three values: response, error, and loading.
              It can also be customized for more efficient use.
            </h2>
            <button className="">
              <a
                href="https://github.com/devXlalit/useApi-Hook"
                target="__blank"
                className="font-extrabold flex items-center gap-1 hover:text-[#252A34] hover:bg-[#EAEAEA] hover:scale-105 duration-300  bg-[#252A34] text-[#EAEAEA] text-center  mt-3 py-2 px-4 rounded-full"
              >
                <RiGitRepositoryLine /> Visit
              </a>
            </button>
          </motion.div>
        </div>
        <div className="h-full mt-16" id="recent-pro">
          <h2 className="font-extrabold text-2xl md:text-4xl leading-none">
            RECENT PROJECT
          </h2>
          <div
            id="radial-bar1"
            className="h-2 md:h-4 w-12 md:w-20 bg-[#08D9D6] rounded-full "
            data-scroll
            data-scroll-speed="2"
          ></div>
          <div className="flex py-10 flex-wrap gap-7 md:px-6" id="rec-pro">
            <ProjectCard
              image={proGif9}
              glink="https://github.com/devXlalit/Project_weblogs.git"
              wlink="https://weblogs-five.vercel.app/"
              title="Weblogs - Free and open source blogging website."
              desc="Nextjs (Frontend + Backend), Next auth, Google authantication (OAuth), MongoDB, Mongoose, Tailwind Css, Framer motion, Node js, Express js, Obsedian, Figma.  "
            />
            <ProjectCard
              image={proGif1}
              glink="https://github.com/devXlalit/js-bootcamp-test.git"
              wlink="https://js-bootcamp-test.vercel.app/"
              title="Courses Landing page - Online Bootcamp landing page for (FCA)."
              desc="Vite + React Js, Razor pay payment gateway, Google form page link, Tailwind Css, Figma. "
              order="flex-row-reverse"
            />
            <ProjectCard
              image={proGif8}
              wlink="https://theblunt.media/"
              title="The Blunt - landing page for Youtube content creating company with 200k+ Subs."
              desc="Vite + React js ,Figma, Tailwind, React-Routers. "
            />
          </div>
        </div>

        <div id="upcoming-pro">
          <h2 className="font-extrabold text-2xl md:text-4xl leading-none pt-20">
            UPCOMING PROJECTS
          </h2>
          <div
            id="radial-bar2"
            className="h-2 md:h-4 w-12 md:w-20 bg-[#FF2E63] rounded-full"
          ></div>
          <div className="md:px-6" id="project-card">
            <img
              id="pr-gif1"
              className="mt-10 rounded-2xl h-44"
              src={proGif7}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ image, title, desc, glink, wlink, order }) => (
  <div
    className={`flex md:flex-nowrap flex-wrap justify-items-center items-center gap-10 p-4 ${order} `}
  >
    <div className="flex md:w-3/5" id="project-card">
      <img id="pr-gif1" className="rounded-2xl " src={image} alt="" />
    </div>
    <div className="md:w-2/5 flex flex-col justify-center">
      <h1 className="md:text-2xl leading-tight pb-2">{title}</h1>
      <p className="font-[gilroy-medium] md:text-xl leading-tight">
        Tech Stack: <span className="opacity-70">{desc}</span>
      </p>
      <span className="flex gap-2 md:gap-5 ">
        {glink && (
          <a href={glink} target="_blank" rel="noopener noreferrer">
            <button
              id="pro-btn"
              className="flex text-sm  justify-center hover:scale-105 hover:bg-[#EAEAEA] hover:text-[#252A34] duration-300 items-start gap-1 bg-[#252A34] text-[#EAEAEA] text-center  mt-6 py-2 px-4 rounded-full"
            >
              <RiGithubLine size={20} />
              GitHub
            </button>
          </a>
        )}

        <a href={wlink} target="_blank" rel="noopener noreferrer">
          <button
            id="pro-btn"
            className="flex text-sm justify-center hover:scale-105 hover:bg-[#EAEAEA] hover:text-[#252A34] duration-300 items-center gap-1 bg-[#252A34] text-[#EAEAEA] text-center  mt-6 py-2 px-4 rounded-full"
          >
            <RiLink size={20} />
            Visit
          </button>
        </a>
      </span>
    </div>
  </div>
);

export default Work;
