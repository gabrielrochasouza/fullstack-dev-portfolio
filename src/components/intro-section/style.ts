import styled from "styled-components";

export const IntroSec = styled.section`
  max-width: var(--max-c-w);
  margin: 0px auto 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  padding: 70px 30px 50px;
  .desc {
    font-size: 1.1rem;
    max-width: 580px;
    color: var(--text-primary-grey);
    font-family: var(--t-p);
    font-weight: 200;
    @media (max-width:768px) {
      margin: 20px 0 30px;
      line-height: 1.4rem;
    }
  }
  p:first-child {
    font-family: var(--t-s);
    color: var(--green-color);
    font-size: 1.5rem;
    @media (max-width:768px) {
      margin: 10px 0;
    }
  }
  h1,
  h2 {
    font-family: var(--t-p);
    font-size: 4.2rem;
    font-weight: 600;
    @media (max-width:768px) {
      font-size: 4.5rem;
    }
    @media (max-width:430px) {
      font-size: 3rem;
    }
  }
  .second-line {
    display: block;
    color: var(--text-primary-grey);
  }
  .col-right {
    max-width: 450px;
    svg {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 1140px) {
      display: none;
    }
  }
  .icons {
    display: flex;
    gap: 20px;
    margin: 20px 0 0 0;
    svg {
      font-size: 40px;
      cursor: pointer;
      :hover {
        color: var(--green-color);
      }
    }
  }
  .icons a:nth-child(1) {
    animation: flutuate infinite 1000ms alternate;
    animation-delay: 0ms;
  }
  .icons a:nth-child(2) {
    animation: flutuate infinite 1000ms alternate;
    animation-delay: 500ms;
  }
  .icons a:nth-child(3) {
    animation: flutuate infinite 1000ms alternate;
    animation-delay: 1000ms;
  }
`;
