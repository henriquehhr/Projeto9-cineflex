import styled from "styled-components";

export const $ChooseSeatPage = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 110px 24px 132px 24px;

    p {
        font-weight: 400;
        font-size: 24px;
        color: #293845;
        margin-bottom: 37px;
    }

    form {
        margin-top: 42px;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;

export const $Seats = styled.ol`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    row-gap: 18px;
    column-gap: 7px;
    margin-bottom: 16px;
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

export const $SeatLabel = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 8px;
    column-gap: 15px;
    justify-items: center;
`;

export const $Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    width: 100%;
    padding: 15px;
    margin-bottom: 7px;
    font-size: 20px;

    ::placeholder {
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        color: #AFAFAF;
    }

`;

export const $Label = styled.label`
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;

`;

export const $SubmitButton = styled.button`
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
    margin: 25px auto 0 auto;
`;