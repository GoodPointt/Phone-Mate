import styled from '@emotion/styled';

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;

  .card {
    overflow: hidden;
    width: 320px;
    height: 130px;
    border-radius: 1em;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #0e0e0e;
    box-shadow: 0 0 2rem rgb(82 80 80 / 80%);
    cursor: pointer;
    transition: 0.2s ease-in-out;
    padding: 5px;
  }

  .card:hover {
    rotate: 1deg;
    scale: 1.05;
  }

  .card,
  .card__buttons-wrap {
    display: flex;
    align-items: center;
  }

  .imgBox {
    width: 6em;
    height: 6em;
    box-shadow: 0px 0.25em 1rem rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    justify-content: center;
  }

  .imgBox svg {
    width: 100%;
    height: 100%;
  }

  .card__name {
    width: 100%;
    text-align: center;
    font-weight: 900;
    transition: 1s ease-in-out;
  }

  .card__name .p1 {
    font-size: 1.2em;
  }

  .card__name .p2 {
    font-size: 0.8em;
    color: rgb(50, 146, 255);
  }

  .card__buttons-wrap {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .card__button {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.1s ease-in-out;
    animation: animate linear infinite 2s;
  }

  .card__button:hover {
    scale: 1.1;
  }

  #call {
    background-color: rgb(47, 153, 61);
  }

  #delete {
    background-color: #863232;

    color: #080808;
  }

  @keyframes animate {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(3px) rotate(-10deg);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;
