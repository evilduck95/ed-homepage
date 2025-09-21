import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import GameDropdown from "./utils/game-dropdown";

const RootNav = ({mouseInCallback, mouseOutCallback}) => {
    return (
        <Navbar
            variant={'dark'}
            bg={'dark'}
            expand={'lg'}
            onMouseEnter={mouseInCallback}
            onMouseLeave={mouseOutCallback}
        >
            <Container fluid>
                <Navbar.Brand href={'/'}>ED Games</Navbar.Brand>
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