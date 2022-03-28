import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { $MovieSessionPage } from "./style";
import CineFooter from "./../CineFooter";

export default function MovieSessionPage() {
    const [movie, setMovie] = useState({});
    const { movieID } = useParams();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`);
        promisse.then(response => setMovie(response.data));
    }, []);

    if (movie.days)
        return (
            <$MovieSessionPage>
                <p>Selecione o horário</p>
                {movie.days.map(day => {
                    return <div key={day.id} >
                        <p>{day.weekday} - {day.date}</p>
                        {day.showtimes.map(session => <Link to={`/sessao/${session.id}`} key={session.id}>
                            <button>{session.name}</button>
                        </Link>)}
                    </div>;
                })}
                <CineFooter
                    movieImg={movie.posterURL}
                    movieTitle={movie.title}
                />
            </$MovieSessionPage>
        );
    return <>aguardando</>;
}