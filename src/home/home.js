import styled from "styled-components";

const duckData = [
    ['#000000', '#000000', '#000000', '#000000', '#000000', '#e52f2f', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#000000', '#000000', '#e52f2f', '#e52f2f', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#e52f2f', '#e52f2f', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#000000', '#000000', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#e52f2f', '#e52f2f', '#f2e21e', '#630c0c', '#f2e21e', '#f2e21e', '#000000', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#ea8e26', '#000000', '#000000'],
    ['#000000', '#f2e21e', '#000000', '#000000', '#000000', '#000000', '#000000', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#ea8e26', '#ea8e26', '#ea8e26', '#ea8e26'],
    ['#f2e21e', '#f2e21e', '#f2e21e', '#000000', '#000000', '#000000', '#000000', '#000000', '#f2e21e', '#f2e21e', '#f2e21e', '#ea8e26', '#ea8e26', '#ea8e26', '#ea8e26', '#000000'],
    ['#000000', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#000000', '#000000', '#000000', '#000000'],
    ['#000000', '#f2e21e', '#ddce17', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#000000', '#000000', '#000000'],
    ['#000000', '#f2e21e', '#f2e21e', '#ddce17', '#f2e21e', '#f2e21e', '#f2e21e', '#ddce17', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#000000', '#000000'],
    ['#000000', '#f2e21e', '#f2e21e', '#f2e21e', '#ddce17', '#ddce17', '#ddce17', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#000000', '#000000'],
    ['#000000', '#000000', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#000000', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#000000', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#f2e21e', '#000000', '#000000', '#000000', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#ea8e26', '#000000', '#000000', '#ea8e26', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#ea8e26', '#ea8e26', '#000000', '#ea8e26', '#ea8e26', '#000000', '#000000', '#000000', '#000000', '#000000']
]

const DuckContainer = styled.div`
  background-color: #282c34;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const DuckGrid = styled.div`
  width: ${props => props.backgroundSizeMultiplier * 160}px;
  height: ${props => props.backgroundSizeMultiplier * 160}px;
  margin: auto;
`;

const ColoredSquaresRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 6.25%;
`;

const ColoredSquare = styled.div`
  height: 100%;
  width: 100%;
  //border: black 1px dashed;
  background-color: ${props => props.backgroundColor};
  opacity: .25;
  //z-index: 10;
  &:hover {
    opacity: 1;
  }
`;

const Home = () => {
    return (
        <DuckContainer>
            <DuckGrid backgroundSizeMultiplier={4}>
                {duckData.map(row =>
                    <ColoredSquaresRow
                        columns={row.length}
                        pixelsInColumn={duckData.length}
                        backgroundSize={80}
                    >
                        {row.map(pixel =>
                            <ColoredSquare
                                backgroundColor={pixel === '#000000' ? '' : pixel}
                                pixelsInRow={row.length}
                                pixelsInColumn={duckData.length}
                            />
                        )}
                    </ColoredSquaresRow>
                )}
            </DuckGrid>
        </DuckContainer>
    )
}

export default Home;