import { MotionProps } from "framer-motion";

export const AnimatedRightDogCard: MotionProps = {
  initial: { left: "400px", opacity: 0 },
  animate: { left: "0px", opacity: 1 },
  exit: { left: "400px", opacity: 0 },
};

export const AnimatedLeftDogCard: MotionProps = {
  initial: { left: "-400px", opacity: 0 },
  animate: { left: "0px", opacity: 1 },
  exit: { left: "-400px", opacity: 0 },
};
