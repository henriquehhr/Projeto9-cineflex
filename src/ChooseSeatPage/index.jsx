import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";


export default function ChooseSeatPage() {
    const [unavaliableSeats, setUnavaliableSeats] = useState([]);
    const [chosenSeats, setChosenSeats] = useState([]);
    const [buyerID, setBuyerID] = useState({ name: "", cpf: 0 });
    const { sessionID } = useParams();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);
        promisse.then(response => setUnavaliableSeats(response.data));
    }, []);

    function choseSeat(e) {
        setChosenSeats([...choseSeat, e.target.id]);
    }

    function bookSeats() {
        if (chosenSeats.length == 0)
            return;
        const bookInfo = {
            ids: chosenSeats,
            name: buyerID.name,
            cpf: buyerID.cpf
        };
        const promisse = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", bookInfo);
        promisse.then(() => {

        });
    }

    if (unavaliableSeats.id) return (
        <section>
            <p>Selecione o(s) assentos(s)</p>
            <ol>
                {unavaliableSeats.movie.seats.map(seat => {
                    <li key={seat.id} onClick={choseSeat} id={seat.id}>
                        {seat.id < 10 ? "0" + seat.id : seat.id}
                    </li>
                })}
            </ol>
            <form onSubmit={bookSeats}>
                <label>Nome do comprador:</label>
                <input type="text" />
                <label>CPF do comprador:</label>
                <input type="text" />
                <button type="submit">Reservar assento(s)</button>
            </form>
        </section>
    );

    return <></>;
} 