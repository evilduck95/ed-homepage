import Background from "./background/background";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router";
import RootNav from "./root-nav/root-nav";
import About from "./about/about";
import PrivacyPolicy from "./ready-set-serve/privacy-policy/privacy-policy";
import ReadySetServe from "./ready-set-serve/ready-set-serve";
import styled from "styled-components";
import Home from "./home/home";
import {useState} from "react";

const GlobalContainer = styled.div`
  position: absolute;
  margin-top: 60px;
  margin-left: 5vw;
  margin-right: 5vw;
  text-align: justify;
  color: white;
  font-size: large;
`;

function App() {

    const [highlightBackground, setHighlightBackground] = useState(false);

    const mouseOverNavbar = () => {
        setHighlightBackground(true)
    }

    const mouseLeftNavbar = () => {
        setHighlightBackground(false)
    }

    return (
        <Router>
            <RootNav mouseInCallback={mouseOverNavbar} mouseOutCallback={mouseLeftNavbar}/>
            <GlobalContainer>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/ready-set-serve'}>
                        <Route index element={<ReadySetServe/>}/>
                        <Route path={'privacy-policy'} element={<PrivacyPolicy/>}/>
                    </Route>
                    <Route path={'*'} element={<Navigate to={'/'}/>}/>
                </Routes>
            </GlobalContainer>
            <Background highlight={highlightBackground}/>
        </Router>
    );
}

export default App;
