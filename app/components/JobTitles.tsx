import type { Title } from "@prisma/client";
import type { Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const letterVariants: Variants = {
  hide: {
    y: 32,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    y: -32,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const lettersContainer: Variants = {
  visible: {
    transition: { staggerChildren: 0.05 },
  },
  hide: {
    transition: { staggerChildren: 0.05 },
  },
};

const Word = ({ word = "Hello" }) => {
  return (
    <div className="flex">
      {word.split("").map((letter, i) => (
        <motion.div
          className="flex-nowrap"
          key={`${letter}-${i}`}
          variants={letterVariants}
        >
          {letter}
        </motion.div>
      ))}
    </div>
  );
};

interface WordsProps {
  words: string[];
}

const Words = ({ words }: WordsProps) => {
  return (
    <div className="flex h-16 flex-wrap gap-3 justify-center items-start">
      {words.map((word) => (
        <motion.div key={word} className="flex">
          <Word word={word} />
        </motion.div>
      ))}
    </div>
  );
};

export type JobTitlesProps = {
  titles: Title[];
  delay?: number;
};

const JobTitles = ({ titles, delay = 2000 }: JobTitlesProps) => {
  const [current, setCurrent] = useState(0);
  const currentTitle = titles[current];
  const words = currentTitle?.title.split(" ") ?? [];

  const onAnimationComplete = (animationName: string) => {
    console.log(animationName);
    if (animationName === "visible") {
      const next = current + 1;
      setTimeout(() => {
        setCurrent(titles[next] ? next : 0);
      }, delay);
    }
  };

  if (!currentTitle) return null;

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={words.join("")}
        id="job-title"
        variants={lettersContainer}
        initial="hidden"
        animate="visible"
        exit="hide"
        onAnimationComplete={onAnimationComplete}
        className="flex justify-center text-5xl font-light"
      >
        <Words words={words} />
      </motion.div>
    </AnimatePresence>
  );
};

export default JobTitles;
