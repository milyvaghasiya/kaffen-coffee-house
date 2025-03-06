import React from "react";
import { motion } from "framer-motion";

const ScrollAnimation = ({ children, delay, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
