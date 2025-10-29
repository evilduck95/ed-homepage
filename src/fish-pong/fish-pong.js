import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  width: 70vw;
  height: 80vh;
  margin: auto auto 20px;

  iframe {
    flex-grow: 1;
    border: none;
    margin: 0;
    padding: 0;
  }
`

const FishPong = () => {
    return (
        <GameContainer>
            <iframe
                title={'Fish Pong'}
                id={'fish-pong'}
                src={'http://localhost:8002'}
            />
        </GameContainer>
    )
}

export default FishPong;