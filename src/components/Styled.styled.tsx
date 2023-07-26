import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 30px;
`;

export const StyledInput = styled.input`
  display: block;
  margin: 0 auto;
  font-size: 20px;
  background-color: #212121;
  color: #ffffff;

  max-width: 100%;
  height: 40px;
  padding: 10px;
  border: 2px solid white;
  border-radius: 5px;

  &:focus {
    color: rgb(50, 146, 255);
    background-color: #212121;
    outline-color: rgb(50, 146, 255);
    box-shadow: -3px -3px 15px rgb(50, 146, 255);
    transition: 0.1s;
    transition-property: box-shadow;
  }
`;

export const StyledBtn = styled.button`
  --glow-color: rgb(176, 210, 255);
  --glow-spread-color: rgba(66, 150, 252, 0.781);
  --enhanced-glow-color: rgb(206, 231, 255);
  --btn-color: rgb(61, 95, 136);
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
  border: 0.25em solid var(--glow-color);
  padding: 1em 3em;
  color: var(--glow-color);
  font-size: 15px;
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

  &::after {
    pointer-events: none;
    content: '';
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

  &:hover {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
  }

  &:active {
    box-shadow: 0 0 0.6em 0.25em var(--glow-color),
      0 0 2.5em 2em var(--glow-spread-color),
      inset 0 0 0.5em 0.25em var(--glow-color);
  }
`;

export const StyledCloseBtn = styled.button`
  cursor: pointer;
  position: relative;
  width: 6em;
  height: 4em;
  border: none;
  background: none;

  &:hover {
    background-color: rgb(210, 0, 0);
  }

  &:active {
    background-color: rgb(130, 0, 0);
  }

  &:hover > .close {
    animation: close 0.2s forwards 1.25s;
  }

  .X {
    content: '';
    position: absolute;
    top: 50%;
    left: 33%;
    width: 2em;
    height: 1.5px;
    background-color: #fff;
    transform: rotate(45deg);
  }

  .Y {
    content: '';
    position: absolute;
    top: 50%;
    left: 33%;
    width: 2em;
    height: 1.5px;
    background-color: #fff;
    transform: rotate(-45deg);
  }

  .close {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: -40%;
    left: 70%;
    width: 3em;
    height: 1.7em;
    font-size: 16px;
    background-color: rgb(254, 255, 225);
    color: #000;
    border: 1px solid #000;
    pointer-events: none;
    opacity: 0;
  }

  @keyframes close {
    100% {
      opacity: 1;
    }
  }
`;
