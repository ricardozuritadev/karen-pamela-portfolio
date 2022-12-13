import { useRef } from 'react';
import { useFollowPointer } from '../../hooks/use-follow-pointer';

import { useTranslation } from 'react-i18next';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

import ScubaDiver from '../Scuba';
import ProjectsContainer from '../ProjectsContainer';

import { BackgroundMotionStyleType } from './types';

const Home = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const { scrollYProgress } = useScroll();

  const backgroundScrollColor: MotionValue = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.65, 1],
    ['#FFFFFF', '#E7EAEB', '#1F343D', '#021A23', '#021A23']
  );

  const backgroundMotionStyle: BackgroundMotionStyleType = {
    backgroundColor: backgroundScrollColor,
  };

  return (
    <>
      <motion.div style={backgroundMotionStyle}>
        <main className="home">
          <ScubaDiver />

          <section className="home__hero container">
            <h2>{t('APP.HOME.HI')}</h2>
            <h1>{t('APP.HOME.DESIGNER')}</h1>
          </section>

          <section className="container">
            <ProjectsContainer />
          </section>
          <section className="container"></section>
          <section className="container text-white2"></section>
          <section className="text-white"></section>
        </main>

        {/* <motion.div
          ref={ref}
          className="box"
          animate={{ x, y }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 100,
            restDelta: 0.001,
          }}
        /> */}
      </motion.div>
    </>
  );
};

export default Home;
