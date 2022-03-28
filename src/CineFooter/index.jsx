import { $CineFooter, $MoviePoster } from "./style";

export default function CineFooter({ movieImg, movieTitle, weekday, session }) {
    if (!weekday) {
        return (
            <$CineFooter>
                <$MoviePoster>
                    <img src={movieImg} alt={movieTitle}></img>
                </$MoviePoster>
                <div><h2>{movieTitle}</h2></div>
            </$CineFooter>
        );
    }
    return (
        <$CineFooter>
            <$MoviePoster>
                <img src={movieImg} alt={movieTitle}></img>
            </$MoviePoster>
            <div>
                <h2>{movieTitle}</h2>
                <h2>{weekday} - {session}</h2>
            </div>
        </$CineFooter>
    );
}