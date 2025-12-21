import styled from "styled-components";
import GamePreviewRow from "../game-preview-row/game-preview-row";
import fishPongImage from "./images/fish-pong.png";
import jumpDemonImage from "./images/jump-demon.png";


const RootContainer = styled.div`
  margin-top: 50px;
`;

const fishPongDescription = `
A game very similar to the original Pong. In this game you compete against an CPU opponent. 
Try to keep the ball in play for as long as possible!
`

const jumpDemonDescription = `
Control a demon flying through space. We don't know where they're going exactly but you 
can help them get there safely by dodging the countless asteroids!
Be careful however not to touch the space fire (don't think about it). Try to travel for as
long as possible to get the highest score.
`

const Games = () => {
    return (
        <RootContainer>
            <GamePreviewRow
                name={'Fish Pong'}
                description={fishPongDescription}
                image={fishPongImage}
                linkTarget={'fish-pong'}
            />
            <GamePreviewRow
                name={'Jump Demon'}
                description={jumpDemonDescription}
                image={jumpDemonImage}
                linkTarget={'jump-demon'}
            />
        </RootContainer>
    )
}

export default Games