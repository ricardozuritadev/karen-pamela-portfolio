import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

import { useTranslation } from 'react-i18next';

import ProjectCard from 'components/project-card/project-card.component';

const ChallengesContainer = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();

  const opacityOnScroll: MotionValue = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5],
    [0, 0, 1]
  );

  const opacityMotionStyle = {
    opacity: opacityOnScroll,
  };

  return (
    <motion.div className="challenges" style={opacityMotionStyle}>
      <div className="challenges__container">
        <div>
          <ProjectCard
            backgroundImg="seat"
            title="Seat"
            description="App Design | Savings though payments & Retirement"
            tags={['ux/ui designer', 'individual', '14 días']}
          />
          <ProjectCard
            backgroundImg="bosquia"
            title="Bosquia"
            description="App Design | Savings though payments & Retirement"
            tags={['ux/ui designer', 'individual', '14 días']}
          />
        </div>
        <div>
          <ProjectCard
            backgroundImg="samsung"
            title="Samsung"
            description="App Design | Savings though payments & Retirement"
            tags={['ux/ui designer', 'individual', '14 días']}
          />
          <ProjectCard
            backgroundImg="roady"
            title="Roady"
            description="App Design | Savings though payments & Retirement"
            tags={['ux/ui designer', 'individual', '14 días']}
          />
        </div>
      </div>

      <h2 className="challenges__title">{t('APP.HOME.CHALLENGES')}</h2>
    </motion.div>
  );
};

export default ChallengesContainer;
