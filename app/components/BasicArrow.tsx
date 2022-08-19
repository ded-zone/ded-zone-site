import { motion } from "framer-motion";
import type { FC } from "react";

const lines = [
  ["5", "50", "50", "5"],
  ["5", "50", "50", "95"],
  ["5", "50", "95", "50"],
];

const BasicArrow: FC<Record<string, unknown>> = (props) => (
  <motion.svg
    width="25"
    height="25"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {lines.map((coords) => (
      <line
        key={coords.join("")}
        x1={coords[0]}
        y1={coords[1]}
        x2={coords[2]}
        y2={coords[3]}
        strokeWidth="10"
        strokeLinecap="round"
        stroke="white"
        fill="transparent"
      />
    ))}
  </motion.svg>
);

export default BasicArrow;
