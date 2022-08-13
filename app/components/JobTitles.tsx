import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const letterVariants = {
  hidden: {
    y: -32,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
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
    transition: { when: "beforeChildren", staggerChildren: 0.25 },
  },
};

const CyclingText = ({}) => {
  return <div></div>;
};

const JobTitles = () => {};

export default JobTitles;
