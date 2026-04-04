'use client';

import { motion } from 'framer-motion';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const CemreHamburgerMenu: React.FC<Props> = ({ isOpen, onClick }) => {
  const transitionProps = {
    type: "spring" as const,
    stiffness: 180,
    damping: 18,
  };

  const lineClasses = "h-0.5 bg-[#f4c542] rounded-full group-hover:bg-[#c9a869]";

  return (
    <motion.button
      onClick={onClick}
      aria-label="Ana menüyü aç"
      animate={isOpen ? "open" : "closed"}
      className="relative group flex flex-col justify-center items-center w-12 h-12 p-3 space-y-2 focus:outline-none"
    >
      <motion.div
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 8 },
        }}
        transition={transitionProps}
        className={`w-full ${lineClasses}`}
      />

      <motion.div
        variants={{
          closed: { opacity: 1, scaleX: 1 },
          open: { opacity: 0, scaleX: 0.2 },
        }}
        transition={transitionProps}
        className={`w-full ${lineClasses}`}
      />

      <motion.div
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -8 },
        }}
        transition={transitionProps}
        className={`w-full ${lineClasses}`}
      />
    </motion.button>
  );
};

export default CemreHamburgerMenu;
