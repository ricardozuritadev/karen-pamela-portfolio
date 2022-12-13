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

  const transformOnScroll: MotionValue = useTransform(
    scrollYProgress,
    [0, 1],
    [transform, '#EDEDED', '#303030', '#161616']
  );

  return (
    <div className="projects">
      <h2 className="projects__title">{t('APP.HOME.PROJECTS')}</h2>
      <div className="projects__container">
        <div>
          <ProjectCard backgroundImg="zensave" />
          <ProjectCard backgroundImg="kukara" />
        </div>
        <div>
          <ProjectCard backgroundImg="goodtrade" />
          <ProjectCard backgroundImg="storytell" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
