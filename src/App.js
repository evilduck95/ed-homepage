import Background from "./background/background";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router";
import RootNav from "./root-nav/root-nav";
import About from "./about/about";
import Games from "./games/games"
import GameFrame from "./game-frame/game-frame";
import styled from "styled-components";
import Home from "./home/home";
import {useState} from "react";
import Footer from "./footer/footer";
import DefaultPrivacyPolicy from "./game-frame/privacy-policy/default-privacy-policy";

const ContentFooterWrapper = styled.div`
  flex: 1; // Fill all space below navbar
  display: flex;
  flex-flow: column;
`

const ContentWrapper = styled.div`
  flex: 1; // Greedy fill space so footer goes to bottom of screen
  margin-top: 100px; // Pad content down to below the fixed navbar and with a little space above
  margin-left: 5vw;
  margin-right: 5vw;
  text-align: justify;
  color: white;
  font-size: large;
  opacity: ${props => props.dimmed ? .5 : 1};
  transition: opacity 1000ms;
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
            <RootNav
                mouseInCallback={mouseOverNavbar}
                mouseOutCallback={mouseLeftNavbar}
            />
            <ContentFooterWrapper>
                <ContentWrapper dimmed={highlightBackground}>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/about'} element={<About/>}/>
                        <Route path={'/games'} element={<Games/>}/>
                        <Route path={'/fish-pong'}>
                            <Route index element={<GameFrame name={'Fish Pong'} id={'fish-pong'}
                                                             srcUrl={'https://pong.evilduck95.net/'}/>}/>
                            <Route path={'privacy-policy'} element={<DefaultPrivacyPolicy gameName={'Fish Pong'}/>}/>
                        </Route>
                        <Route path={'/jump-demon'}>
                            <Route index element={<GameFrame name={'Jump Demon'} id={'jump-demon'}
                                                             srcUrl={'https://jumpdemon.evilduck95.net/'}/>}/>
                            <Route path={'privacy-policy'} element={<DefaultPrivacyPolicy gameName={'Jump Demon'}/>}/>
                        </Route>
                        <Route path={'*'} element={<Navigate to={'/'}/>}/>
                    </Routes>
                </ContentWrapper>
                <Footer
                    mouseInCallback={mouseOverNavbar}
                    mouseOutCallback={mouseLeftNavbar}
                />
            </ContentFooterWrapper>
            <Background highlight={highlightBackground}/>
        </Router>
    );
}

export default App;
