import { useRef } from 'react';
import { useFollowPointer } from '../../hooks/use-follow-pointer';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

import { BackgroundMotionStyleType } from './types';

const Home = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const { scrollYProgress } = useScroll();

  const scrollColor: MotionValue = useTransform(
    scrollYProgress,
    [0, 0.9],
    ['#ededed', '#080808']
  );

  const backgroundMotionStyle: BackgroundMotionStyleType = {
    backgroundColor: scrollColor,
  };

  return (
    <>
      <motion.div style={backgroundMotionStyle}>
        <main className="home">
          <section className="home__hero">
            <h2>Hi! </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              aliquid nihil illum ipsam quae labore alias possimus? Sit, eius
              accusamus odit veritatis saepe, iusto dolorem est, maxime placeat
              officia ipsa ea.
            </p>
          </section>
          <section className="container">
            <h2>Sección 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              aliquid nihil illum ipsam quae labore alias possimus? Sit, eius
              accusamus odit veritatis saepe, iusto dolorem est, maxime placeat
              officia ipsa ea.
            </p>
          </section>
          <section className="container text-white2">
            <h2>Sección 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              aliquid nihil illum ipsam quae labore alias possimus? Sit, eius
              accusamus odit veritatis saepe, iusto dolorem est, maxime placeat
              officia ipsa ea.
            </p>
          </section>
          <section className="text-white">
            <h2>Sección 4</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              aliquid nihil illum ipsam quae labore alias possimus? Sit, eius
              accusamus odit veritatis saepe, iusto dolorem est, maxime placeat
              officia ipsa ea.
            </p>
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
