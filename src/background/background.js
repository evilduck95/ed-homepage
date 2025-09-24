import styled from "styled-components";

import * as styleGlobals from '../utils/style-vars'
import {useEffect, useState} from "react";

const duckData = [
    ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#a91b1b', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#bd2424', '#292923', '#292923', '#292923', '#000000', '#000000', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#292923', '#292923', '#292923', '#e52f2f', '#292923', '#292923', '#000000', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#ea8e26', '#000000', '#000000'],
    ['#000000', '#77170c', '#000000', '#000000', '#000000', '#000000', '#000000', '#292923', '#292923', '#292923', '#292923', '#292923', '#ea8e26', '#ea8e26', '#ea8e26', '#ea8e26'],
    ['#77170c', '#292923', '#292923', '#000000', '#000000', '#000000', '#000000', '#000000', '#292923', '#292923', '#292923', '#ea8e26', '#ea8e26', '#d88120', '#d88120', '#000000'],
    ['#000000', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#000000', '#000000', '#000000', '#000000'],
    ['#000000', '#292923', '#374142', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#000000', '#000000', '#000000'],
    ['#000000', '#292923', '#292923', '#374142', '#292923', '#292923', '#292923', '#374142', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#000000', '#000000'],
    ['#000000', '#292923', '#292923', '#292923', '#374142', '#374142', '#374142', '#292923', '#292923', '#292923', '#292923', '#1a1a18', '#292923', '#292923', '#000000', '#000000'],
    ['#000000', '#000000', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#1a1a18', '#292923', '#292923', '#292923', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#292923', '#292923', '#292923', '#292923', '#292923', '#1a1a18', '#1a1a18', '#292923', '#292923', '#292923', '#000000', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#000000', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#292923', '#000000', '#000000', '#000000', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#d88120', '#000000', '#000000', '#d88120', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
    ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#d88120', '#ea8e26', '#000000', '#d88120', '#ea8e26', '#000000', '#000000', '#000000', '#000000', '#000000']
]

const DuckContainer = styled.div`
  background-color: #111111;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 110vh;
  width: 100vw;
  display: flex;
  z-index: -1;
  // @media only screen and (max-width: ${styleGlobals.TOUCHSCREEN_MAX_WIDTH}) {
  //   height: 50vh;
  // }
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
  background-color: ${props => props.backgroundColor};
  opacity: ${props => props.highlighted ? .75 : .25};
  transition: background-color 500ms, opacity 200ms;
  &:hover {
    transition-duration: 100ms;
    background-color: #e52f2f;
  }
`;

const Background = ({highlight}) => {
    const [sizeMultiplier, setSizeMultiplier] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 800) {
                setSizeMultiplier(4)
            } else if (window.innerWidth > 400) {
                setSizeMultiplier(2)
            } else {
                setSizeMultiplier(1)
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <DuckContainer>
            <DuckGrid backgroundSizeMultiplier={sizeMultiplier}>
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
                                onMouseOver={() => console.log("Mouse")}
                                highlighted={highlight}
                            />
                        )}
                    </ColoredSquaresRow>
                )}
            </DuckGrid>
        </DuckContainer>
    )
}

export default Background;