import { BurgerContainer } from "./style";

const BurgerMenu = () => {
  return (
    <BurgerContainer>
      <label htmlFor="check" className="bar">
        <input id="check" type="checkbox" />
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
        <div className="mobile-menu">
          <ul className="menu-items">
            <li>
              <a 
                href="#intro" 
                style={{color: document.location.hash === '#intro' ? "var(--green-color)" : "#fff"}}
              >
                Início
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                style={{color: document.location.hash === '#about' ? "var(--green-color)" : "#fff"}}
              >
                Sobre
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                style={{color: document.location.hash === '#contact' ? "var(--green-color)" : "#fff"}}
              >
                Contato
              </a>
            </li>
            <li>
              <a 
                href="#project" 
                style={{color: document.location.hash === '#project' ? "var(--green-color)" : "#fff"}}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                target={"_blank"}
                href="https://drive.google.com/file/d/1SqAM0VZTf_r1eDowagdvjrAqT9zni97H/view?usp=sharing"
              >
                Currículo
              </a>
            </li>
          </ul>
        </div>
      </label>
    </BurgerContainer>
  );
};

export default BurgerMenu;
