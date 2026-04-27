import { motion } from 'framer-motion';

const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background base */}
      <div className="absolute inset-0 bg-white dark:bg-neutral-950 transition-colors duration-500" />
      
      {/* Liquid Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 120, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] rounded-full bg-accent/10 dark:bg-accent/5 blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[10%] left-[15%] w-[30%] h-[30%] rounded-full bg-purple-400/10 dark:bg-purple-600/5 blur-[110px]"
      />
    </div>
  );
};

export default LiquidBackground;
