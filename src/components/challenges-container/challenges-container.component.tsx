import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  transform,
} from 'framer-motion';

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
      <h2 className="challenges__title">{t('APP.HOME.CHALLENGES')}</h2>
      <div className="challenges__container">
        <div>
          <ProjectCard
            backgroundImg="zensave"
            title="Zensave"
            description="App Design | Savings though payments & Retirement"
            tags={['ux/ui designer', 'individual', '14 días']}
          />
          <ProjectCard
            backgroundImg="kukara"
            title="Kukaramakara"
            description="App Design | Savings though payments & Retirement"
            tags={['ux/ui designer', 'individual', '14 días']}
          />
        </div>
        <div>
          <ProjectCard
            backgroundImg="goodtrade"
            title="Good Trade"
            description="App Design | Savings though payments & Retirement"
            tags={['ux/ui designer', 'individual', '14 días']}
          />
          <ProjectCard
            backgroundImg="storytell"
            title="Storytell"
            description="App Design | Savings though payments & Retirement"
            tags={['ux/ui designer', 'individual', '14 días']}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ChallengesContainer;
