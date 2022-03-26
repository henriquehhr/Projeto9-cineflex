import { Routes, Route, BrowserRouter } from "react-router-dom";
import StartPage from "./../StartPage";
import { $Header } from "./style";

export default function App() {
    return (
        <BrowserRouter>
            <$Header>
                <h1>CINEFLIX</h1>
            </$Header>
            <Routes>
                {<Route path="/" element={<StartPage />} />}
                <Route />
                <Route />
                <Route />
            </Routes>
        </BrowserRouter>
    );
}