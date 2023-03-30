import styled from "styled-components";

export const StyledDetailHeader = styled.div`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    box-sizing: border-box;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 7rem;
    background-color: ${({ theme }) => theme.Color.white};
    border: 0.1rem solid;

    z-index: 50;
    img {
        width: 7rem;
        height: 5rem;
        border-radius: 50%;
    }
    h1 {
        ${({ theme }) => theme.Font.subTitle.depth2}
    }
    span {
        ${({ theme }) => theme.Font.body.depth2}
    }
`;
