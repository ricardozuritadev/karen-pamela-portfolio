import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const ScubaDiver = () => {
  const { scrollYProgress } = useScroll();

  const rotateOutOnScroll: MotionValue = useTransform(
    scrollYProgress,
    [0.3, 0.4],
    ['0deg', '10deg']
  );

  const opacityOutOnScroll: MotionValue = useTransform(
    scrollYProgress,
    [0.35, 0.4],
    ['1', '0']
  );

  const opacityInOnScroll: MotionValue = useTransform(
    scrollYProgress,
    [0.41, 0.5],
    ['0', '1']
  );

  const translateLeftOnScroll: MotionValue = useTransform(
    scrollYProgress,
    [0.3, 0.4],
    ['0rem', '-20rem']
  );

  const translateRightOnScroll: MotionValue = useTransform(
    scrollYProgress,
    [0.35, 0.5],
    ['25rem', '0rem']
  );

  const swimLeftMotionStyle = {
    translateX: translateLeftOnScroll,
    rotate: rotateOutOnScroll,
    opacity: opacityOutOnScroll,
    width: '10rem',
  };

  const swimRightMotionStyle = {
    translateX: translateRightOnScroll,
    opacity: opacityInOnScroll,
    width: '10rem',
  };

  return (
    <>
      <motion.img
        src="/gifs/scuba.gif"
        alt="scuba-diver"
        style={swimLeftMotionStyle}
        className="scuba-diver scuba-diver--left"
      />

      <motion.img
        src="/gifs/scuba.gif"
        alt="scuba-diver"
        style={swimRightMotionStyle}
        className="scuba-diver scuba-diver--right"
      />
    </>
  );
};

export default ScubaDiver;
