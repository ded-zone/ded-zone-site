import type { Title } from "@prisma/client";
import type { Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const letterVariants: Variants = {
  hide: () => ({
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
  hidden: () => ({
    y: -32,
    opacity: 0,
    filter: "blur(5px)",
  }),
  visible: {
    y: 0,
    opacity: 1,
    rotateZ: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
    },
  },
};

const lettersContainer: Variants = {
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const Word = ({ word = "Hello" }) => {
  return (
    <div className="inline-flex items-center justify-center">
      {word.split("").map((letter, i) => (
        <motion.div
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
    <div className="flex h-12 flex-wrap gap-2 sm:gap-3 justify-center items-center">
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

const defaultTitles: Title[] = [{ id: "a", title: "Lead Developer" }];

const JobTitles = ({
  titles = defaultTitles,
  delay = 2000,
}: JobTitlesProps) => {
  const [current, setCurrent] = useState(0);
  const currentTitle = titles[current];
  const words = currentTitle?.title.split(" ") ?? [];

  const onAnimationComplete = (animationName: string) => {
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
        className="flex justify-center text-3xl sm:text-5xl font-light"
      >
        <Words words={words} />
      </motion.div>
    </AnimatePresence>
  );
};

export default JobTitles;
