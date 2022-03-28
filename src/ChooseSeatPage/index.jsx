import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { $ChooseSeatPage, $Seats, $Seat, $SubmitButton, $Input, $Label, $SeatLabel } from "./style";
import CineFooter from "./../CineFooter";


export default function ChooseSeatPage() {
    const [unavaliableSeats, setUnavaliableSeats] = useState([]);
    const [chosenSeats, setChosenSeats] = useState([]);
    const [buyerID, setBuyerID] = useState({ name: "", cpf: undefined });
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
                <$SeatLabel>
                    <$Seat className="selected" />
                    <$Seat></$Seat>
                    <$Seat className="unavailable" />
                    <span>Selecionado</span>
                    <span>Disponível</span>
                    <span>Indisponível</span>
                </$SeatLabel>
                <form onSubmit={bookSeats}>
                    <$Label>Nome do comprador:</$Label>
                    <$Input placeholder="Digite seu nome..." type="text" value={buyerID.name} onChange={e => setBuyerID({ name: e.target.value, cpf: buyerID.cpf })} />
                    <$Label>CPF do comprador:</$Label>
                    <$Input placeholder="Digite seu CPF..." type="text" value={buyerID.cpf} onChange={e => setBuyerID({ name: buyerID.name, cpf: parseInt(e.target.value) || "" })} />
                    <$SubmitButton type="submit">Reservar assento(s)</$SubmitButton>
                </form>
                <CineFooter
                    movieImg={unavaliableSeats.movie.posterURL}
                    movieTitle={unavaliableSeats.movie.title}
                    weekday={unavaliableSeats.day.weekday}
                    session={unavaliableSeats.name}
                />
            </$ChooseSeatPage>
        );
    }

    return <></>;
} 