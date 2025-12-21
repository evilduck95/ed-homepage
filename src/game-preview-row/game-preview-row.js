import styled from "styled-components";


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

const Body = styled.div`
  display: flex;
  flex-direction: row;
`

const Description = styled.div`
  width: 80%;
  margin-right: 5%;
  text-justify: inter-character;
`

const Image = styled.div`
  padding: 5px;
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