import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 80vh;
  margin: auto auto 20px;

  iframe {
    flex-grow: 1;
    border: none;
    margin: 0;
    padding: 0;
  }

  a {
    margin: 10px auto 0;
    font-size: x-large;
    color: unset;
    text-decoration: underline;

    :hover {
      cursor: pointer;
    }
  }
`

const GameFrame = ({name, id, srcUrl}) => {
    return (
        <GameContainer>
            <iframe
                title={name}
                id={id}
                src={srcUrl}
            />
            <a href={id}>Privacy Policy</a>
        </GameContainer>
    )
}

export default GameFrame;