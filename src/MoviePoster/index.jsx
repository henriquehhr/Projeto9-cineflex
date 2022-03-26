import { $MoviePoster } from "./style";

export default function MoviePoster({ title, posterURL }) {

    return (
        <$MoviePoster>
            <img src={posterURL} alt={title} />
        </$MoviePoster>
    );
}