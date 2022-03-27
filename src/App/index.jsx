import { Routes, Route, BrowserRouter } from "react-router-dom";
import StartPage from "./../StartPage";
import MovieSessionPage from "../MovieSessionPage";
import ChooseSeatPage from "../ChooseSeatPage";
import SuccessPage from "../SuccessPage";
import { $Header } from "./style";
import "./../../src/reset.css";

export default function App() {
    return (
        <BrowserRouter>
            <$Header>
                <h1>CINEFLIX</h1>
            </$Header>
            <Routes>
                {<Route path="/" element={<StartPage />} />}
                <Route path="/filme/:movieID" element={<MovieSessionPage />} />
                <Route path="/sessao/:sessionID" element={<ChooseSeatPage />} />
                <Route path="/sucesso" element={<SuccessPage />} />
            </Routes>
        </BrowserRouter>
    );
}