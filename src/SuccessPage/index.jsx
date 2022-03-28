import { Link, useLocation } from "react-router-dom";
import { $SuccessPage } from "./style";

export default function SuccessPage() {
    const navigate = useLocation();
    console.log(navigate);
    return (
        <$SuccessPage>
            <p>Pedido feito com sucesso!</p>
            <p>Filme e sessão</p>
            <p>{navigate.state.session.movie.title}</p>
            <p>{navigate.state.session.day.date} {navigate.state.session.name}</p>
            <p>Ingressos</p>
            {
                navigate.state.bookInfo.ids.map(id => {
                    return <p key={id}>Assento {id.length < 2 ? "0" + id : id}</p>
                })
            }
            <p>Comprador</p>
            <p>Nome: {navigate.state.bookInfo.name}</p>
            <p>CPF: {navigate.state.bookInfo.cpf}</p>
            <Link to="/">
                <button>Voltar pra Home</button>
            </Link>
        </$SuccessPage>
    );
}