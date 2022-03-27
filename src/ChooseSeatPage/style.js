import styled from "styled-components";

export const $ChooseSeatPage = styled.section`
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

export const $Seats = styled.ol`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    row-gap: 18px;
    column-gap: 7px;
`;

export const $Seat = styled.li`
    background: #C3CFD9;
    border: 1px solid #808F9D;
    box-sizing: border-box;
    border-radius: 12px;
    width: 26px;
    height: 26px;
    display: grid;
    place-content: center;

    &.unavailable {
        background: #FBE192;
        border: 1px solid #F7C52B;
    }

    &.selected {
        background: #8DD7CF;
        border: 1px solid #45BDB0;
    }
`;