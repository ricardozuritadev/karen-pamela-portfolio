import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  transform,
} from 'framer-motion';

import { useTranslation } from 'react-i18next';

import ProjectCard from '../project-card/project-card.component';

const ProjectsContainer = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();

  const opacityOnScroll: MotionValue = useTransform(
    scrollYProgress,
    [0, 0.15],
    [0, 1]
  );

  const opacityMotionStyle = {
    opacity: opacityOnScroll,
  };

  return (
    <motion.div className="projects" style={opacityMotionStyle}>
      <h2 className="projects__title">{t('APP.HOME.PROJECTS')}</h2>
      <div className="projects__container">
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

export default ProjectsContainer;
