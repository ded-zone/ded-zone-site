import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import AaronAvatar from "~/components/AaronAvatar";
import BasicArrow from "~/components/BasicArrow";
import JobTitles from "~/components/JobTitles";
import { getShuffledTitles } from "~/models/title.server";
import { useState } from "react";
import { chance } from "~/utils";

type LoaderData = Awaited<ReturnType<typeof getShuffledTitles>>;

export const loader: LoaderFunction = async () =>
  json<LoaderData>(await getShuffledTitles());

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "/aaron.svg",
    as: "image",
    type: "image/svg+xml",
  },
];

const show: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const showLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

const showRight: Variants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

const gradients = [
  { main: "from-emerald-900 to-emerald-500", accent: "bg-emerald-400" },
  { main: "from-purple-900 to-purple-500", accent: "bg-purple-400" },
  { main: "from-blue-900 to-blue-400", accent: "bg-sky-500" },
  { main: "from-amber-800 to-amber-400", accent: "bg-amber-500" },
];

export default function Index() {
  const titles = useLoaderData<LoaderData>() ?? [];
  const [currentGradient, setCurrentGradient] = useState(gradients[0]);

  const avatarOnClick = () => {
    setCurrentGradient(
      chance.pickone(
        gradients.filter((gradient) => currentGradient !== gradient)
      )
    );
  };

  return (
    <main
      className={`relative flex min-h-screen items-center bg-gradient-to-t ${currentGradient.main}`}
    >
      <motion.div
        variants={show}
        initial="hidden"
        animate="show"
        className="grid w-screen grid-flow-row auto-rows-max justify-center text-center text-white"
      >
        <motion.div variants={showLeft} key={1} className="mx-auto">
          <div className="relative">
            <AaronAvatar
              onClick={avatarOnClick}
              matchingColor={currentGradient.accent}
            />
          </div>
          <div className="relative h-0 w-fit left-full bottom-1/2">
            <div className="flex gap-4 font-cursive text-xl sm:text-2xl items-center pl-2 -translate-y-1/2">
              <BasicArrow
                transition={{ repeat: Infinity, duration: 1.5 }}
                animate={{ x: [4, 0, 4] }}
              />
              <p>Click me!</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={showRight} key={2}>
          <h1 className="text-4xl sm:text-6xl font-thin pt-4">
            Aaron <span className="font-bold text-opacity-80">Dosser</span>
          </h1>
        </motion.div>
        <motion.div key={3} variants={showLeft}>
          <h2 className="text-2xl sm:text-4xl pt-4 sm:pt-8 pb-4">Your next</h2>
        </motion.div>
        <motion.div key={4} variants={showRight}>
          <JobTitles titles={titles} />
        </motion.div>
      </motion.div>
    </main>
  );
}
