import styled from "styled-components";

export const BurgerContainer = styled.div`
    @media (min-width:620px) {
        display: none;
    }
  input[type="checkbox"] {
    -webkit-appearance: none;
    display: none;
    visibility: hidden;
  }

  .bar {
    position: relative;
    cursor: pointer;
    width: 50px;
    height: 29px;
    display: block;
    z-index: 300;
  }

  .bar span {
    position: absolute;
    width: 35px;
    height: 2px;
    background: var(--green-color);
    border-radius: 100px;
    display: inline-block;
    transition: 0.3s ease;
    left: 0;
  }

  .bar span.top {
    z-index: 300;
    top: 0;
  }

  .bar span.middle {
    top: 13px;
  }

  .bar span.bottom {
    z-index: 300;
    bottom: 0;
  }

  input[type]:checked ~ span.top {
    transform: rotate(45deg);
    transform-origin: top left;
    width: 48px;
    left: 2px;
  }

  input[type]:checked ~ span.bottom {
    transform: rotate(-45deg);
    transform-origin: top left;
    width: 48px;
    bottom: -6px;
    box-shadow: 0 0 10px #495057;
  }

  input[type]:checked ~ span.middle {
    transform: translateX(-20px);
    opacity: 0;
  }
  input[type]:checked ~ .mobile-menu{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    transition: 500ms all;
    z-index: 100;
    .menu-items{
        display: flex;
        width: 100%;
        height: 100%;
        font-size: 3rem;
        gap: 60px;
        align-content: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        li{
            color: var(--text-primary);
        }
        
    }
  }
  .mobile-menu{
    position: fixed;
    top: 0%;
    transition: 500ms all;
    left: 100%;
    height: 100vh;
    width: 100vw;
    background-color: var(--bg-secondary);
    z-index: 100;
    color: var(--green-color);
  }
`;
