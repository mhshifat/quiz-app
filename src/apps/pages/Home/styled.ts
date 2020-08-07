import styled from "styled-components";

export const HomeWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  > .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  > .title {
    font-family: "Fascinate Inline", sans-serif;
    background-image: linear-gradient(180deg, #fff, #875155);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
    font-weight: 400;
  }

  > .btn {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38f58;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  > .btn.start {
    max-width: 200px;
  }
`;
