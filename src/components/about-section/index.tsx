import { AboutContainer } from "./style";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { BiLogoDjango, BiLogoJava } from "react-icons/bi";
import {
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaGit,
  FaNode,
  FaWordpress,
  FaReact,
  
} from "react-icons/fa";
import { SiNestjs, SiPrisma, SiRedux, SiStyledcomponents, SiTypescript } from "react-icons/si";
import {TbBrandNextjs} from 'react-icons/tb'

const AboutSection = () => {
  const techIcons = [
    FaHtml5,
    FaCss3,
    FaJsSquare,
    FaGit,
    FaNode,
    FaWordpress,
    FaReact,
    SiRedux,
    SiTypescript,
    BiLogoDjango,
    SiStyledcomponents,
    BiLogoJava,
    SiNestjs,
    SiPrisma,
    TbBrandNextjs
  ];
  return (
    <AboutContainer id="about">
      <div className="about-me">
        <div
          className="col-left"
          data-aos="fade-right"
          data-aos-delay="800"
          data-aos-duration="1000"
          data-aos-once={"false"}
        >
          <h3>Sobre Mim</h3>
          <p>
            Sou uma pessoa que adora resolver problemas, quando vejo algo que
            não consigo resolver, isso me causa um grande incômodo e me
            impulsiona a querer solucionar o problema. Meu primeiro contato com
            a programação ocorreu na faculdade de Engenharia Mecânica, onde tive
            a matéria de Introdução a Computação, nela tive contato com a
            linguagem Fortran, e nessa matéria gostei muito de programar e senti
            que tinha uma facilidade e afinidade para programação. Na faculdade
            tive a oportunidade de atuar em um projeto onde tive o meu primeiro
            contato com o desenvolvimento web, onde aprendi sobre HTML, CSS,
            Javascript e também desenvolvi alguns sites usando o Wordpress.
            Atualmente, terminei o curso de fullstack na Kenzie Academy Brasil
            onde pude desenvolver inúmeros projeto, trabalhar em grupo e
            desenvolver e treinar minhas soft Skills.
          </p>
          <div className="technologies-icons">
            {techIcons.map((Icon, i) => (
              <Icon
                key={`techIcon:${i}`}
                style={{
                  animation: "flutuateIcon 1000ms infinite alternate",
                  animationDelay: `${i * 200}ms`,
                }}
              />
            ))}
          </div>
        </div>
        <div
          className="col-right"
          data-aos="fade-in"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-once={"false"}
        >
          <figure>
            <img
              src="https://avatars.githubusercontent.com/u/62857557?v=4"
              alt=""
            />
          </figure>
          
        </div>
      </div>
    </AboutContainer>
  );
};

export default AboutSection;
