import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import Parallax from '../parallax/parallax.component';
import ProjectCard from 'components/project-card/project-card.component';

const ChallengesContainer = () => {
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
        className="challenges"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        ref={ref}
      >
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
    </Parallax>
  );
};

export default ChallengesContainer;
