import { BurgerContainer } from "./style";

interface IBurgerMenu {
  menuItems: {
    id: string,
    name: string,
    title: string,
    href: string,
    isButton: boolean,
  }[]
}

const BurgerMenu = ({menuItems}: IBurgerMenu) => {
  return (
    <BurgerContainer>
      <label htmlFor="check" className="bar">
        <input id="check" type="checkbox" />
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
        <div className="mobile-menu">
          <ul className="menu-items">
            {menuItems?.map((item, index)=> (
              <li key={index + item.id}>
                <a
                  target={item.isButton ? '_blank' : ''}
                  rel={item.isButton ? 'noreferrer' : ''}
                  href={item.href}
                  style={{color: (document.location.hash === item.id || item.isButton) ? "var(--green-color)" : "#fff"}}
                  onClick={()=> {
                    const input = document.getElementById('check')
                    input?.click()
                  }}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </label>
    </BurgerContainer>
  );
};

export default BurgerMenu;
