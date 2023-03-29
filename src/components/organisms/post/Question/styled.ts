import styled from "styled-components";

export const StyledQuestion = styled.div`
    margin-bottom: 5rem;
    h1 {
        ${({ theme }) => theme.Font["title"]}
        margin-bottom: 0rem;
    }
    p {
        ${({ theme }) => theme.Font["subTitle"]["depth2"]}
    }
`;

export const StyledIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 2rem;

    span {
        ${({ theme }) => theme.Font["subTitle"]["depth2"]}
        margin: 0 1rem 0 0.5rem;
    }
`;
