import {Nav, NavDropdown} from "react-bootstrap";
import styled from "styled-components";

const DropdownWrapper = styled.div`
`;

const GameDropdownMobile = ({title, children}) => {
    return (
        <DropdownWrapper>
            <Nav>
                <NavDropdown
                    id={'basic-dropdown'}
                    menuVariant={'alert'}
                    // align={'end'}
                    title={title}
                >
                    <NavDropdown.Item>
                        About Game
                    </NavDropdown.Item>
                    {children}
                </NavDropdown>
            </Nav>
        </DropdownWrapper>
    )
}

export default GameDropdownMobile;