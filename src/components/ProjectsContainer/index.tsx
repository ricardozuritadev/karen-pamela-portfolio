import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  transform,
} from 'framer-motion';

import { useTranslation } from 'react-i18next';

import ProjectCard from '../ProjectCard';

const ProjectsContainer = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();

  // const transformOnScroll: MotionValue = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   [transform, '#EDEDED', '#303030', '#161616']
  // );

  return (
    <div className="projects">
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
    </div>
  );
};

export default ProjectsContainer;
