import Logo from "../logo";
import { Container } from "./style";
import "aos/dist/aos.css"; // You can also use <link> for styles
import BurgerMenu from "../burger-menu";

export const Header = () => {

  return (
    <Container>
      <div className="container">
        <div
          data-aos="fade-down"
          data-aos-offset="-100"
          data-aos-once={"True"}
          className="logo"
        >
          <a href='#inicio'>
            <Logo />
          </a>
        </div>
        <nav>
          <ul>
            <li
              data-aos="fade-down"
              data-aos-offset="-100"
              data-aos-once={"True"}
              data-aos-delay="150"
            >
              <a 
                href='#about' 
                style={{color: document.location.hash === '#about' ? "var(--green-color)" : "#fff"}}
              >
                Sobre
              </a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="-100"
              data-aos-once={"True"}
              data-aos-delay="250"
            >
              <a 
                href='#project' 
                style={{color: document.location.hash === '#project' ? "var(--green-color)" : "#fff"}}
              >
                Projetos
              </a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="-100"
              data-aos-once={"True"}
              data-aos-delay="300"
              style={{color: document.location.hash === '#contact' ? "var(--green-color)" : "#fff"}}
            >
              <a 
                href='#contact' 
                style={{color: document.location.hash === '#contact' ? "var(--green-color)" : "#fff"}}
              >
                Contato
              </a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="-100"
              data-aos-once={"True"}
              data-aos-delay="350"
            >
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://drive.google.com/file/d/1SqAM0VZTf_r1eDowagdvjrAqT9zni97H/view?usp=sharing"
              >
                CV
              </a>
            </li>
          </ul>
          <BurgerMenu />
        </nav>
      </div>
    </Container>
  );
};
