import styled from "styled-components";
import * as styleGlobals from "../utils/style-vars";


const RootContainer = styled.div`
  margin-bottom: 20px;
  border-radius: 10px;

  .game-image {
    transition: all .3s;
  }
  
  &:hover .game-image {
    transform: scale(1.05, 1.05);
  }
  
  a {
    color: unset;
    text-decoration: unset;

    :hover {
      cursor: pointer;
    }
  }
  
`

const Name = styled.div`
`

const ClickToPlay = styled.div`
  font-size: small;
  font-style: italic;
  color: #20c997;
`

const Body = styled.div`
  display: flex;
  flex-direction: row;
`

const Description = styled.div`
  width: 80%;
  margin-right: 5%;
  text-justify: inter-character;
  @media only screen and (max-width: ${styleGlobals.TOUCHSCREEN_MAX_WIDTH}) {
    width: unset;
    z-index: 1;
    pre {
      white-space: pre-wrap;       /* Since CSS 2.1 */
      white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
      white-space: -pre-wrap;      /* Opera 4-6 */
      white-space: -o-pre-wrap;    /* Opera 7 */
      word-wrap: break-word;       /* Internet Explorer 5.5+ */
      overflow: visible;
    }
  }
`

const Image = styled.div`
  padding: 5px;
  @media only screen and (max-width: ${styleGlobals.TOUCHSCREEN_MAX_WIDTH}) {
    position: absolute;
    float: right;
    right: 10%;
    //margin-top: 5%;
    z-index: 0;
    opacity: .4;
  }
`

const ImgInnerContainer = styled.div`
  border-radius: 5px 30px 30px 30px;
  overflow: hidden;
`

const GamePreviewRow = ({name, description, image, linkTarget}) => {
    return (
        <RootContainer className={'game-preview-row'}>
            <a href={linkTarget}>
                <Name><h2>{name}</h2></Name>
                <ClickToPlay>Click to play</ClickToPlay>
                <Body>
                    <Description>
                        <pre>{description}</pre>
                    </Description>
                    <Image className={'game-image'}>
                        <ImgInnerContainer>
                            <img
                                src={image}
                                height={180}
                                alt={'A stylised view of a game of Fish Pong'}
                            />
                        </ImgInnerContainer>
                    </Image>
                </Body>
            </a>
        </RootContainer>
    )
}

export default GamePreviewRow