import Home from "./home/home";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router";
import Test from "./test/test";
import RootNav from "./root-nav/root-nav";
import About from "./about/about";
import PrivacyPolicy from "./ready-set-serve/privacy-policy/privacy-policy";
import ReadySetServe from "./ready-set-serve/ready-set-serve";

function App() {
    return (
        <Router>
            <RootNav/>
            <Home/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/test'} element={<Test/>}/>
                <Route path={'about'} element={<About/>}/>
                <Route path={'/ready-set-serve'}>
                    <Route index element={<ReadySetServe/>}/>
                    <Route path={'privacy-policy'} element={<PrivacyPolicy/>}/>
                </Route>
                <Route path={'*'} element={<Navigate to={'/'}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
