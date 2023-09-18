import { IntroSec } from "./style";
import Icon from "../dev-pic/dev-pic";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const IntroSection = () => {
  return (
    <IntroSec id='intro'>
      <div
        className="col-left"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="500"
        data-aos-once={false}
      >
        <p data-aos="fade-right" data-aos-delay="1000" data-aos-duration="500" data-aos-once={false}>
          Olá, meu nome é
        </p>
        <h1 data-aos="fade-right" data-aos-delay="1200" data-aos-duration="500" data-aos-once={false}>
          Gabriel Rocha{"\n"}
          <span className="second-line">Desenvolvedor Full Stack</span>
        </h1>

        <p
          className="desc"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="500"
          data-aos-once={false}
        >
          Eu sou um desenvolvedor web fullstack,
          estudei na Kenzie Academy Brasil, e completei o
          curso de desenvolvimento fullstack de 2000 horas. 
          Além disso, já desenvolvi diversos projetos pessoais.
          Atualmente estou atuando como programador fullstack
          na empresa Exati Tecnologia.{" "}
        </p>

        <div className="icons">
          <a href="https://github.com/gabrielrochasouza" target={"_blank"}>
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-da-rocha-de-souza/"
            target={"_blank"}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5524998913379"
            target={"_blank"}
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div
        className="col-right"
        data-aos="flip-right"
        data-aos-delay="300"
        data-aos-duration="2000"
        data-aos-once={false}
      >
        <Icon />
      </div>
    </IntroSec>
  );
};
