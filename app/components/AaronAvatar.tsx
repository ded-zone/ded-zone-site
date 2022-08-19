import { motion } from "framer-motion";
import { useState } from "react";

const AaronAvatar = ({
  onClick = () => {},
  matchingColor = "bg-purple-400",
}) => {
  const [hoverClasses, setHoverClasses] = useState("bg-aaron");

  return (
    <motion.div
      onClick={onClick}
      onHoverStart={() => setHoverClasses("bg-aaron-wink")}
      onHoverEnd={() => setHoverClasses("bg-aaron")}
      className={`${hoverClasses} ${matchingColor} cursor-pointer h-48 w-48 sm:h-64 sm:w-64 select-none rounded-full bg-cover bg-center bg-origin-border shadow-lg`}
    />
  );
};

export default AaronAvatar;
