import styled from "styled-components";

export const StyledAnswerHead = styled.div`
    span {
        ${({ theme }) => theme.Font["subTitle"]["depth2"]}
        margin-bottom: 20px;
        font-weight: 600;
        cursor: pointer;
    }
`;

export const StyledAnswerList = styled.div`
    h1 {
        ${({ theme }) => theme.Font["body"]["depth1"]}
        margin-bottom: 20px;
        font-weight: 600;
    }
    p {
        ${({ theme }) => theme.Font["body"]["depth1"]}
        margin-bottom: 20px;
    }
    span {
        ${({ theme }) => theme.Font["caption"]["depth1"]}
    }
`;
