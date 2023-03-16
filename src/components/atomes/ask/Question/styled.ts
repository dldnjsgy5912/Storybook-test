import styled from "styled-components";

export const StyledQuestion = styled.div`
    margin-bottom: 50px;
    h1 {
        ${({ theme }) => theme.Font["title"]}
        margin-bottom: 20px;
    }
    p {
        ${({ theme }) => theme.Font["subTitle"]["depth2"]}
    }
`;

export const StyledIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 20px;

    span {
        ${({ theme }) => theme.Font["subTitle"]["depth2"]}
        margin: 0 10px 0 5px;
    }
`;
