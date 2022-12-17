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
        <div>
          <img
            src={`/images/${title}.png`}
            alt=""
            className="project-card__title"
          />
        </div>
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
