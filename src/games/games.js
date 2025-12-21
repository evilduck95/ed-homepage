import styled from "styled-components";
import GamePreviewRow from "../game-preview-row/game-preview-row";
import fishPongImage from "./images/fish-pong.png";
import jumpDemonImage from "./images/jump-demon.png";


const RootContainer = styled.div`
  margin-top: 50px;

  &:hover .game-preview-row {
    opacity: .5;
  }
  
  .game-preview-row {
    transition: opacity .3s;

    &:hover {
      opacity: 1;
    }
  }

`

const PageDescription = styled.div`
  margin: 0 0 50px;
  font-size: large;

  a {
    color: unset;

    :hover {
      cursor: pointer;
    }
  }
`

const fishPongDescription = `
A game very similar to the original Pong. In this game you compete against an CPU opponent. 
Try to keep the ball in play for as long as possible!

This is my first "full" game made in Godot, it is essentially an shallow usage of Godot 
to get to grips with the physics, scripting and how project management around the engine
might work.
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
            <PageDescription>
                This page consists of a series of very small games I've been making in the Godot game engine.
                The <a target={'_blank'} rel={'noopener noreferrer'} href={'https://20_games_challenge.gitlab.io/'}>20
                Games Challenge</a>
                provides the broad structure and jumping off points for these games.
                <br/>
                <br/>
                Click on a game in the list below to try it out!
            </PageDescription>
            <GamePreviewRow
                className={'test'}
                name={'Fish Pong'}
                description={fishPongDescription}
                image={fishPongImage}
                linkTarget={'fish-pong'}
            />
            <GamePreviewRow
                className={'test'}
                name={'Jump Demon'}
                description={jumpDemonDescription}
                image={jumpDemonImage}
                linkTarget={'jump-demon'}
            />
        </RootContainer>
    )
}

export default Games