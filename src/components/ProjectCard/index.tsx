type ProjectCardProps = {
  backgroundImg: string;
  title: string;
  description: string;
  tags: string[];
};

const ProjectCard = ({
  backgroundImg,
  title,
  description,
  tags,
}: ProjectCardProps) => {
  return (
    <div className={`project-card project-card--${backgroundImg}`}>
      <div className={`project-card__details`}>
        <h2 className="project-card__title">{title}</h2>
        <p className="project-card__description">{description}</p>
        <ul className="project-card__tags">
          {tags.map((tag, i) => (
            <li key={i} className="project-card__tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
