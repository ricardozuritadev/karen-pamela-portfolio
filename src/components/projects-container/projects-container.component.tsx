import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

import { useTranslation } from 'react-i18next';

import ProjectCard from 'components/project-card/project-card.component';

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
          <a
            href="https://karen-pamela.vercel.app/pages/zensave-case-study.html"
            target="_blank"
          >
            <ProjectCard
              backgroundImg="zensave"
              title="zensave-title"
              description={t('APP.PROJECTS.ZENSAVE.DESCRIPTION')}
              role={t('APP.TAGS.ROLE.UXUIDESIGNER')}
              projectType={t('APP.TAGS.TYPE.INDIVIDUAL')}
              duration={14}
              tagsColor="cyan"
            />
          </a>

          <a
            href="https://karen-pamela.vercel.app/pages/kukara-case-study.html"
            target="_blank"
          >
            <ProjectCard
              backgroundImg="kukara"
              title="kukara-title"
              description={t('APP.PROJECTS.KUKARA.DESCRIPTION')}
              role={t('APP.TAGS.ROLE.UXUIDESIGNER')}
              projectType={t('APP.TAGS.TYPE.TEAM')}
              duration={8}
              tagsColor="yellow"
            />
          </a>
        </div>
        <div>
          <a
            href="https://karen-pamela.vercel.app/pages/good-trade-case-study.html"
            target="_blank"
          >
            <ProjectCard
              backgroundImg="goodtrade"
              title="goodtrade-title"
              description={t('APP.PROJECTS.GOODTRADE.DESCRIPTION')}
              role={t('APP.TAGS.ROLE.UXUIDESIGNER')}
              projectType={t('APP.TAGS.TYPE.INDIVIDUAL')}
              duration={14}
              tagsColor="purple"
            />
          </a>

          <a href="#">
            <ProjectCard
              backgroundImg="storytell"
              title="storytell-title"
              description={t('APP.PROJECTS.STORYTELL.DESCRIPTION')}
              role={t('APP.TAGS.ROLE.UXUIDESIGNER')}
              projectType={t('APP.TAGS.TYPE.TEAM')}
              duration={5}
              tagsColor="orange"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsContainer;
