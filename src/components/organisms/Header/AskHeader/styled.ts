import styled from "styled-components";

export const StyledHeader = styled.div`
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    margin-bottom: 50px;
    img {
        width: 70px;
        height: 50px;
        border-radius: 50%;
    }
    h1 {
        ${({ theme }) => theme.Font["subTitle"]["depth2"]}
    }
    span {
        ${({ theme }) => theme.Font["body"]["depth2"]}
    }
`;
