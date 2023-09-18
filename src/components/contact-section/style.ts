import styled from "styled-components";

export const Container = styled.section`
  margin: 20px auto 0;
  max-width: var(--max-c-w);
  padding: 60px 5px 0;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3,
  p,
  span {
    text-align: center;
  }
  >span {
    font-family: var(--t-s);
    color: var(--green-color);
    display: block;
  }
  p {
    margin: 10px auto 0;
    max-width: 300px;
    font-size:0.7rem;
  }
  form {
    padding: 0px;
    margin: 20px auto;
    max-width: 460px;
    width: 100%;
    @media(min-width: 1870px) {
      max-width: 600px;
    }
  }
  > form {
    text-align: center;
  }

  .input-group {
    position: relative;
    margin: 10px 0 ;
  }
  .input-group textarea{
    max-width: 100%;
    min-width: 100%;
    max-height: 200px;
    min-height: 100px;
    font-family: var(--t-p);
  }
  .input-group label span{
    color: var(--green-color);
  }
  .input {
    width: 100%;
    border: solid 1.5px #9e9e9e;
    border-radius: 1rem;
    background: none;
    padding: 1rem;
    font-size: 1rem;
    color: #f5f5f5;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .user-label {
    position: absolute;
    left: 15px;
    color: #e8e8e8;
    pointer-events: none;
    transform: translateY(1rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .input:focus, input:valid, 
  textarea:valid {
    outline: none;
    border: 1.5px solid var(--green-color);
  }

  .input:focus ~ label,
  input:valid ~ label, input:not(:placeholder-shown) ~ label , textarea:valid ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: var(--bg-primary);
    padding: 0 0.2em;
    color: var(--green-color);
  }
  

  button {
    margin: 25px auto;
    border: 0.25em solid var(--glow-color);
    padding: 1em 3em;
    color: var(--glow-color);
    font-size: 1rem;
    font-weight: bold;
    background-color: var(--btn-color);
    border-radius: 1em;
    outline: none;
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 1em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
    text-shadow: 0 0 0.5em var(--glow-color);
    position: relative;
    transition: all 0.3s;
  }

  button::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--glow-spread-color);
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  button:hover {
    color: var(--btn-color-text);
    background-color: var(--glow-color);
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
  }

  button:active {
    box-shadow: 0 0 0.6em 0.25em var(--glow-color),
      0 0 2.5em 2em var(--glow-spread-color),
      inset 0 0 0.5em 0.25em var(--glow-color);
  }
`;
