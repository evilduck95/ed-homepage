import {NavDropdown} from "react-bootstrap";
import {useState} from "react";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  padding: 10px 0;
`;

const GameDropdown = ({title, children}) => {
    const [shown, setShown] = useState(false);

    const show = (e) => {
        setShown(true);
    }

    const hide = (e) => {
        setShown(false);
    }

    const goToPage = () => {
        window.location.href = `/${title.toLowerCase().replaceAll(' ', '-')}`;
        console.log(window.location.href)
    }

    return (
        <DropdownWrapper
            onMouseEnter={show}
            onMouseLeave={hide}
        >
            <NavDropdown
                id={'basic-dropdown'}
                align={'end'}
                title={title}
                show={shown}
                onClick={goToPage}
            >
                {children}
            </NavDropdown>
        </DropdownWrapper>
    )
}

export default GameDropdown;