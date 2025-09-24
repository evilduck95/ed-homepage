import {Nav, NavDropdown} from "react-bootstrap";
import {useState} from "react";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  padding: 10px 0;
`;

const GameDropdownPc = ({title, children}) => {
    const [shown, setShown] = useState(false);

    const show = () => {
        setShown(true);
    }

    const hide = () => {
        setShown(false);
    }

    const goToPage = () => {
        window.location.href = `/${title.toLowerCase().replaceAll(' ', '-')}`;
    }

    return (
        <DropdownWrapper
            onMouseEnter={show}
            onMouseLeave={hide}
        >
            <Nav>
                <NavDropdown
                    id={'basic-dropdown'}
                    menuVariant={'dark'}
                    align={'end'}
                    title={title}
                    show={shown}
                    onClick={goToPage}
                >
                    {children}
                </NavDropdown>
            </Nav>
        </DropdownWrapper>
    )
}

export default GameDropdownPc;