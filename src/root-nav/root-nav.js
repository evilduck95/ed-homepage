import {Container, Nav, Navbar} from "react-bootstrap";

import './root-nav.css';
import styled from "styled-components";

const RightHandNav = styled.div`
`;

const CozyNavbarSeparator = styled.div`
  margin-right: auto;
  height: 1em;
  border-left: 2px solid #ea8e26;
  @media only screen and (min-width: 450px) {
    display: none;
  }
`;

const RootNav = ({mouseInCallback, mouseOutCallback}) => {
    return (
        <Navbar
            variant={'light'}
            bg={'duck-bar'}
            expand={'lg'}
            onMouseEnter={mouseInCallback}
            onMouseLeave={mouseOutCallback}
            fixed={'top'}
        >
            <Container fluid>
                <Navbar.Brand href={'/'}>
                    <img
                        src={'logo192.png'}
                        height={50}
                        alt={'logo'}/>&nbsp;
                    EvilDuck Games
                </Navbar.Brand>
                <Nav className={'me-auto'}>
                    <Nav.Link href={'/about'}>About</Nav.Link>
                </Nav>
                <CozyNavbarSeparator/>
                <RightHandNav>
                    <Nav className={'me-auto'}>
                        <Nav.Link href={'/games'}>Games</Nav.Link>
                    </Nav>
                </RightHandNav>
                {/*<PcDropdowns>*/}
                {/*    <GameDropdownPc title={'Fish Pong'}>*/}
                {/*        <NavDropdown.Item href={'/fish-pong/privacy-policy'}>Privacy Policy</NavDropdown.Item>*/}
                {/*    </GameDropdownPc>*/}
                {/*</PcDropdowns>*/}
                {/*<MobileDropdowns>*/}
                {/*    <GameDropdownMobile title={'Fish Pong'}>*/}
                {/*        <NavDropdown.Item href={'/fish-pong/privacy-policy'}>Privacy Policy</NavDropdown.Item>*/}
                {/*    </GameDropdownMobile>*/}
                {/*</MobileDropdowns>*/}
            </Container>
        </Navbar>
    )
}

export default RootNav;