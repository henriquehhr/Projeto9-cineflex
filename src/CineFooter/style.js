import styled from "styled-components";

export const $CineFooter = styled.footer`
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 14px 10px;
    display: flex;
    align-items: center;
    gap: 14px;

    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    h2 {
        font-weight: 400;
        font-size: 26px;
        color: #293845;
    }
`;

export const $MoviePoster = styled.div`
    grid-column: 1 / 2;
    border-radius: 2px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 8px;
    width: fit-content;
    height: fit-content;

    img {
        height: 72px;
        width: 48px;
    }
`;