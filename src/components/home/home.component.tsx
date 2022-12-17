import { useRef } from 'react';
import { useFollowPointer } from 'hooks/use-follow-pointer';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

import { useTranslation } from 'react-i18next';

import ScubaDiver from 'components/scuba/scuba.component';
import ProjectsContainer from 'components/projects-container/projects-container.component';
import ChallengesContainer from 'components/challenges-container/challenges-container.component';

import { BackgroundMotionStyleType } from 'types/home.types';

const Home = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const { scrollYProgress } = useScroll();

  const backgroundScrollColor: MotionValue = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    ['#FFFFFF', '#EDEDED', '#303030', '#161616']
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

          <section className="home__projects container">
            <ProjectsContainer />
          </section>
          <section className="empty-section"></section>
          <section className="home__challenges container">
            <ChallengesContainer />
          </section>
          <section className="container text-white2"></section>
          <section className="footer container text-white">
            <img
              src="/images/bottom.png"
              alt="footer"
              className="footer__img"
            />
          </section>
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
