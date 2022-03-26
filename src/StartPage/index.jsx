import axios from "axios";
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
                {moviesList.map(movie => <MoviePoster
                    key={movie.id}
                    title={movie.title}
                    posterURL={movie.posterURL}
                />)}
            </$MovieList>
        </$StartPage>
    );
}