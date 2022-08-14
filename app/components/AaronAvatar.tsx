import { motion } from "framer-motion";
import { useState } from "react";

const AaronAvatar = () => {
  const [hoverClasses, setHoverClasses] = useState("bg-aaron");

  return (
    <motion.div
      onHoverStart={() => setHoverClasses("bg-aaron-wink")}
      onHoverEnd={() => setHoverClasses("bg-aaron")}
      className={`${hoverClasses} cursor-pointer h-64 w-64 select-none rounded-full bg-purple-400 bg-cover bg-center bg-origin-border shadow-lg`}
    />
  );
};

export default AaronAvatar;
