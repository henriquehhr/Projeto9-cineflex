import styled from "styled-components";

export const $StartPage = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 110px;

    p {
        font-weight: 400;
        font-size: 24px;
        color: #293845;
        margin-bottom: 37px;
    }
`;

export const $MovieList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;