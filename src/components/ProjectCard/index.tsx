type ProjectCardProps = {
  backgroundImg: string;
};

const ProjectCard = ({ backgroundImg }: ProjectCardProps) => {
  return <div className={`project-card project-card--${backgroundImg}`}></div>;
};

export default ProjectCard;
