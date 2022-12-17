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
          <a href="#">
            <ProjectCard
              backgroundImg="samsung"
              title="samsung-title"
              description={t('APP.CHALLENGES.SAMSUNG.DESCRIPTION')}
              role={t('APP.TAGS.ROLE.UIDESIGNER')}
              duration={3}
              tagsColor="yellow"
            />
          </a>

          <a href="#">
            <ProjectCard
              backgroundImg="roady"
              title="roady-title"
              description={t('APP.CHALLENGES.ROADY.DESCRIPTION')}
              role={t('APP.TAGS.ROLE.UXUIDESIGNER')}
              duration={2}
              tagsColor="cyan"
            />
          </a>
        </div>

        <div>
          <a href="#">
            <ProjectCard
              backgroundImg="seat"
              title="seat-title"
              description={t('APP.CHALLENGES.SEAT.DESCRIPTION')}
              role={t('APP.TAGS.ROLE.UIDESIGNER')}
              duration={1}
              tagsColor="orange"
            />
          </a>

          <a href="#">
            <ProjectCard
              backgroundImg="bosquia"
              title="bosquia-title"
              description={t('APP.CHALLENGES.BOSQUIA.DESCRIPTION')}
              role={t('APP.TAGS.ROLE.UIDESIGNER')}
              duration={3}
              tagsColor="turquoise"
            />
          </a>
        </div>
      </div>

      <h2 className="challenges__title">{t('APP.HOME.CHALLENGES')}</h2>
    </motion.div>
  );
};

export default ChallengesContainer;
