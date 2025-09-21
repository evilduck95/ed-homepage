import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import GameDropdown from "./utils/game-dropdown";

import './root-nav.css';

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
                <Navbar.Collapse id={'basic-navbar-nav'}>
                    <Nav className={'me-auto'}>
                        <Nav.Link href={'/about'}>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Container className={'justify-content-end'}>
                <GameDropdown title={'Ready Set Serve'}>
                    <NavDropdown.Item href={'/ready-set-serve/privacy-policy'}>Privacy Policy</NavDropdown.Item>
                </GameDropdown>
            </Container>
        </Navbar>
    )
}

export default RootNav;