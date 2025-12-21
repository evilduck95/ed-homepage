import styled from "styled-components";


const RootContainer = styled.div`
  margin-bottom: 20px;

  a {
    color: unset;
    text-decoration: none;

    :hover {
      cursor: pointer;
    }
  }
`;

const Name = styled.div`
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
`;

const Description = styled.div`
  width: 80%;
  margin-right: 5%;
  text-justify: inter-character;
`;

const Image = styled.div`
  padding: 5px;
`;

const GamePreviewRow = ({name, description, image, linkTarget}) => {
    return (
        <RootContainer>
            <a href={linkTarget}>
                <Name><h2>{name}</h2></Name>
                <Body>
                    <Description>{description}</Description>
                    <Image><img
                        src={image}
                        height={180}
                        alt={'A stylised view of a game of Fish Pong'}
                    /></Image>
                </Body>
            </a>
        </RootContainer>
    )
}

export default GamePreviewRow