import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { $MovieList, $StartPage } from "./style";
import MoviePoster from "./../MoviePoster";

export default function StartPage() {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promisse.then(response => setMoviesList(response.data));
    }, []);

    return (
        <$StartPage>
            <p>Selecione o filme</p>
            <$MovieList>
                {moviesList.map(movie =>
                    <Link to={`/filme/${movie.id}`} key={movie.id}>
                        <MoviePoster
                            title={movie.title}
                            posterURL={movie.posterURL}
                        />
                    </Link>)}
            </$MovieList>
        </$StartPage>
    );
}