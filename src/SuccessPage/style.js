import styled from "styled-components";

export const $SuccessPage = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    margin: 110px 24px 0 24px;
    width: calc(100% - 48px);

    h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #247A6B;
    }

    h3 {
        margin-top: 32px;
        margin-bottom: 5px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
    }
    p {
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
        color: #293845;
    }

    a {
        display: flex;
        width: 100%;
        justify-content: center;
        text-decoration: none;
    }
`;

export const $HomeButton = styled.button`
    background: #E8833A;
    border-radius: 3px;
    width: 225px;
    height: 43px;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 80px;
    align-self: center;
`;