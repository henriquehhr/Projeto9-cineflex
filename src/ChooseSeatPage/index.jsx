import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { $ChooseSeatPage, $Seats, $Seat } from "./style";


export default function ChooseSeatPage() {
    const [unavaliableSeats, setUnavaliableSeats] = useState([]);
    const [chosenSeats, setChosenSeats] = useState([]);
    const [buyerID, setBuyerID] = useState({ name: "", cpf: 0 });
    const { sessionID } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);
        promisse.then(response => setUnavaliableSeats(response.data));
    }, []);

    function choseSeat(e) {
        const seatID = parseInt(e.target.id);
        if (chosenSeats.includes(seatID)) {
            const newChosenSeats = chosenSeats.filter(seat => seat != seatID);
            setChosenSeats(newChosenSeats);
        }
        else setChosenSeats([...chosenSeats, seatID]);
    }

    function bookSeats(e) {
        e.preventDefault();
        if (chosenSeats.length == 0)
            return;
        const bookInfo = {
            ids: chosenSeats.map(seat => unavaliableSeats.seats.find(unaSeat => unaSeat.id == seat).name),
            name: buyerID.name,
            cpf: buyerID.cpf
        };
        const promisse = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", bookInfo);
        promisse.then(() => {
            navigate("/sucesso", { state: { bookInfo: bookInfo, session: unavaliableSeats } });
        });
    }

    if (unavaliableSeats.id) {
        return (
            <$ChooseSeatPage>
                <p>Selecione o(s) assentos(s)</p>
                <$Seats>
                    {unavaliableSeats.seats.map(seat =>
                        <$Seat
                            key={seat.id}
                            onClick={seat.isAvailable ? choseSeat : () => { }}
                            id={seat.id}
                            className={seat.isAvailable ? (chosenSeats.includes(seat.id) ? "selected" : "") : "unavailable"}>
                            {seat.name.length < 2 ? "0" + seat.name : seat.name}
                        </$Seat>
                    )}
                </$Seats>
                <form onSubmit={bookSeats}>
                    <label>Nome do comprador:</label>
                    <input type="text" value={buyerID.name} onChange={e => setBuyerID({ name: e.target.value, cpf: buyerID.cpf })} />
                    <label>CPF do comprador:</label>
                    <input type="text" value={buyerID.cpf} onChange={e => setBuyerID({ name: buyerID.name, cpf: parseInt(e.target.value) || "" })} />
                    <button type="submit">Reservar assento(s)</button>
                </form>
            </$ChooseSeatPage>
        );
    }

    return <></>;
} 