import { useTranslation } from 'react-i18next';

type ProjectCardProps = {
  backgroundImg: string;
  title: string;
  description: string;
  role: string;
  projectType?: string | null;
  duration: number;
  tagsColor: 'yellow' | 'cyan' | 'green' | 'turquoise' | 'purple' | 'orange';
};

const ProjectCard = ({
  backgroundImg,
  title,
  description,
  role,
  projectType,
  duration,
  tagsColor,
}: ProjectCardProps) => {
  const { t } = useTranslation();
  console.log('title', title);

  return (
    <div className={`project-card project-card--${backgroundImg}`}>
      <div className={`project-card__details`}>
        <div>
          <img
            src={`/images/${title}.png`}
            alt=""
            className={`project-card__title ${
              title === 'goodtrade-title' || title === 'kukara-title'
                ? 'project-card__title--bigger'
                : '' || title === 'seat-title' || title === 'roady-title'
                ? 'project-card__title--smaller'
                : ''
            }`}
          />
        </div>
        <p className="project-card__description">{description}</p>
        <ul className="project-card__tags">
          <li className={`project-card__tag--${tagsColor}`}>{role}</li>
          {projectType && (
            <li className={`project-card__tag--${tagsColor}`}>{projectType}</li>
          )}
          <li className={`project-card__tag--${tagsColor}`}>
            {`${duration} ${t('APP.TAGS.DURATION.DAYS')}`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
