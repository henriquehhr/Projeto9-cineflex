import { Link, useLocation } from "react-router-dom";
import { $SuccessPage, $HomeButton } from "./style";

export default function SuccessPage() {
    const navigate = useLocation();
    const cpf = navigate.state.bookInfo.cpf;
    return (
        <$SuccessPage>
            <h2>Pedido feito<br></br> com sucesso!</h2>
            <h3>Filme e sessão</h3>
            <p>{navigate.state.session.movie.title}</p>
            <p>{navigate.state.session.day.date} {navigate.state.session.name}</p>
            <h3>Ingressos</h3>
            {
                navigate.state.bookInfo.ids.map(id => {
                    return <p key={id}>Assento {id.length < 2 ? "0" + id : id}</p>
                })
            }
            <h3>Comprador</h3>
            <p>Nome: {navigate.state.bookInfo.name}</p>
            <p>CPF: {cpf.slice(0, 3)}.{cpf.slice(3, 6)}.{cpf.slice(6, 9)}-{cpf.slice(9, 11)}</p>
            <Link to="/">
                <$HomeButton>Voltar pra Home</$HomeButton>
            </Link>
        </$SuccessPage>
    );
}