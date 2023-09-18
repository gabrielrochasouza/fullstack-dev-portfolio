import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { Container } from "./style";
import "aos/dist/aos.css"; // You can also use <link> for styles

interface IProjects {
  title: string;
  image: string;
  description: string;
  urlRepo: string;
  urlProject: string;
  technologies: string[];
}

const ProjectCard = ({
  title,
  image,
  description,
  urlProject,
  urlRepo,
  technologies,
}: IProjects) => {
  return (
    <Container   >
      <figure data-aos="fade-right" data-aos-once={false} data-aos-delay="500" data-aos-duration="1000">
        <img src={image} alt={"Imagem: " + title} />
        <figcaption></figcaption>
      </figure>
      <div className="content" data-aos="flip-right" data-aos-once={false} data-aos-delay="500" data-aos-duration="1000">
        <div className="icon-link">
          <a href={urlRepo} target={"_blank"} title="Link do repositório">
            <FaGithub />
          </a>
          <a href={urlProject} target={"_blank"} title="Link do repositório">
            <BiLinkExternal />
          </a>
        </div>
        <div className="box-project">
          <span>Projeto</span>
          <h4>{title}</h4>
          <div className="proj-desc">{description}</div>
        </div>
        <ul className="tech-list">
          {technologies.map((tech, i) => (
            <li key={`${urlProject}:${i}`}>{tech}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
export default ProjectCard;
