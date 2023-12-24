import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="w-[80px] h-[80px] bg-zinc-300 dark:bg-red-500"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    />
  )
}

export default Loader