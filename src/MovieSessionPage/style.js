import styled from "styled-components";

export const $MovieSessionPage = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 110px 24px 122px 24px;

    p {
        font-weight: 400;
        font-size: 20px;
        color: #293845;
        margin-bottom: 28px;
    }

    p.header {
        font-size: 24px;
        margin-bottom: 37px;
        align-self: center;
    }
`;

export const $SessionButton = styled.button`
    background: #E8833A;
    border-radius: 3px;
    width: 83px;
    height: 43px;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #FFFFFF;
`;

export const $SessionList = styled.ul`
    display: flex;
    gap: 8px;
    margin-bottom: 28px;
`;