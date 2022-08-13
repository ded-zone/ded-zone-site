import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const letterVariants = {
  hide: {
    y: 32,
    opacity: 0,
    transition: {
      duration: 0.7,
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
      duration: 1,
    },
  },
};

const lettersContainer = {
  visible: {
    transition: { staggerChildren: 0.25 },
  },
  hide: {
    transition: { staggerChildren: 0.25 },
  },
};

export type JobTitlesProps = {
  titles: JobTitle[];
};

interface JobTitle {
  title: string;
  id: string;
}

const defaultTitles: JobTitle[] = [
  { id: "0", title: "Senior Software Engineer" },
  { id: "1", title: "Product Architect" },
  { id: "2", title: "Code Monkey" },
  { id: "3", title: "Lead Developer" },
  { id: "4", title: "Bug Squishing Expert" },
  { id: "5", title: "Favorite Employee" },
];

interface WordsProps {
  words: string[];
}

const Word = ({ word = "Hello" }) => {
  return (
    <>
      {word.split("").map((letter, i) => (
        <motion.div key={`${letter}-${i}`} variants={letterVariants}>
          {letter}
        </motion.div>
      ))}
    </>
  );
};

const Words = ({ words }: WordsProps) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {words.map((word) => (
        <motion.div
          key={word}
          variants={lettersContainer}
          initial="hidden"
          animate="visible"
          className="flex h-16"
        >
          <Word word={word} />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

const JobTitles = ({ titles = defaultTitles }) => {
  const [current, setCurrent] = useState(0);
  const cycleTimer = useRef<NodeJS.Timer>();
  const currentTitle = titles[current];
  const words = currentTitle?.title.split(" ") ?? [];

  useEffect(() => {
    cycleTimer.current = setInterval(() => {
      const next = current + 1;
      setCurrent(titles[next] ? next : 0);
    }, 5000);
    return () => {
      clearInterval(cycleTimer.current);
    };
  }, [current, setCurrent, titles]);

  if (!currentTitle) return null;

  return (
    <div id="job-title" className="flex justify-center gap-4 text-5xl">
      <Words words={words} />
    </div>
  );
};

export default JobTitles;
