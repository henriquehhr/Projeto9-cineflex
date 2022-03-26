import styled from "styled-components";

export const $MoviePoster = styled.li`
    border-radius: 3px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    padding: 8px;
    width: fit-content;
    height: fit-content;
    margin-bottom: 11px;
    
    img {
        aspect-ratio: 500 / 750;
        height: auto;
        width: 129px;
    }
`;