import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import Parallax from '../parallax/parallax.component';
import ProjectCard from 'components/project-card/project-card.component';

const ProjectsContainer = () => {
  const { t } = useTranslation();

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: {
      opacity: 0,
      scale: 1,
    },
  };

  return (
    <Parallax>
      <motion.div
        className="projects"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        ref={ref}
      >
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
    </Parallax>
  );
};

export default ProjectsContainer;
