import styled from "styled-components";
import {MdKeyboardDoubleArrowUp} from "react-icons/md";

const RootContainer = styled.div`
  bottom: 0;
  width: 100%;
  display: flex;
  flex-flow: column;
`

const Top = styled.div`
  background-color: #ea8e26;
  text-align: center;
  padding: 5px 50px 0 0;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #d88120;
  padding: 5px 20vw 10px;
`

const InfoSection = styled.div`
  width: 260px;
  padding: 5px 15px;
  border-color: #c2751e #e18a2a #e19044;
  border-style: solid;
  border-width: 5px;
  font-size: 15px;
  overflow-wrap: normal;
  text-align: center;
  align-content: center;
  color: #333436;

  a {
    color: #092e70;
  }

  cursor: ${props => props.clickable ? 'pointer' : 'auto'};
`

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <RootContainer>
            <Top>
                <h4>Evil Duck Games</h4>
            </Top>
            <Bottom>
                <InfoSection>Contact:<br/>
                    <a href={'mailto:evilduck95games@gmail.com'}>evilduck95games@gmail.com</a></InfoSection>
                <InfoSection>Background art created using <a
                    href={'https://www.piskelapp.com/'}>PiskelApp</a></InfoSection>
                <InfoSection onClick={scrollToTop} clickable={true}>
                    <MdKeyboardDoubleArrowUp size={'2em'}/>
                    Click to go back to top
                    <MdKeyboardDoubleArrowUp size={'2em'}/>
                </InfoSection>
            </Bottom>
        </RootContainer>
    )
}

export default Footer;