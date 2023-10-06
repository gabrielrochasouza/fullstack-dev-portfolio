import Logo from "../logo";
import { Container } from "./style";
import "aos/dist/aos.css"; // You can also use <link> for styles
import BurgerMenu from "../burger-menu";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  useNavigate();

  const menuItems = [
    {
      id: '#intro',
      href: '#intro',
      name: 'intro',
      title: 'Início',
      isButton: false,
    },
    {
      id: '#about',
      href: '#about',
      name: 'about',
      title: 'Sobre',
      isButton: false,
    },
    {
      id: '#project',
      href: '#project',
      name: 'project',
      title: 'Projetos',
      isButton: false,
    },
    {
      id: '#contact',
      href: '#contact',
      name: 'contact',
      title: 'Contato',
      isButton: false,
    },
    {
      id: '',
      href: 'https://drive.google.com/file/d/1SqAM0VZTf_r1eDowagdvjrAqT9zni97H/view?usp=sharing',
      name: 'button',
      title: 'CV',
      isButton: true,
    }
  ]

  return (
    <Container>
      <div className="container">
        <div
          data-aos="fade-down"
          data-aos-offset="-100"
          data-aos-once={"True"}
          className="logo"
        >
          <a href='#intro'>
            <Logo />
          </a>
        </div>
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li
                data-aos="fade-down"
                data-aos-offset="-100"
                data-aos-once={"True"}
                data-aos-delay={100 + index * 50}
                key={index + item.id}
              >
                <a 
                  target={item.isButton ? '_blank' : ''}
                  rel={item.isButton ? 'noreferrer' : ''}
                  href={item.href}
                  style={{color: (document.location.hash === item.id || item.isButton)  ? "var(--green-color)" : "#fff"}}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <BurgerMenu menuItems={menuItems} />
        </nav>
      </div>
    </Container>
  );
};
