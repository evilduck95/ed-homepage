import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import GameDropdownPc from "./utils/game-dropdown-pc";

import './root-nav.css';
import * as styleGlobals from '../utils/style-vars';
import styled from "styled-components";
import GameDropdownMobile from "./utils/game-dropdown-mobile";

const PcDropdowns = styled.div`
  @media only screen and (max-width: ${styleGlobals.TOUCHSCREEN_MAX_WIDTH}) {
    display: none;
  }
`;

const MobileDropdowns = styled.div`
  @media only screen and (min-width: ${styleGlobals.MOUSESCREEN_MIN_WIDTH}) {
    display: none;
  }
`;

const CozyNavbarSeparator = styled.div`
  margin-right: auto;
  height: 1em;
  border-left: 2px solid #ea8e26;
  @media only screen and (min-width: 450px){
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
                <PcDropdowns>
                    <GameDropdownPc title={'Fish Pong'}>
                        <NavDropdown.Item href={'/fish-pong/privacy-policy'}>Privacy Policy</NavDropdown.Item>
                    </GameDropdownPc>
                </PcDropdowns>
                <MobileDropdowns>
                    <GameDropdownMobile title={'Fish Pong'}>
                        <NavDropdown.Item href={'/fish-pong/privacy-policy'}>Privacy Policy</NavDropdown.Item>
                    </GameDropdownMobile>
                </MobileDropdowns>
            </Container>
        </Navbar>
    )
}

export default RootNav;