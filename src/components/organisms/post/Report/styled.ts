import styled from "styled-components";

export const StyledReport = styled.div`
    margin: 2rem 0;
    h1 {
        ${({ theme }) => theme.Font["subTitle"]["depth1"]}
        text-align: center;
    }

    button {
    }
    input {
        margin-bottom: 2rem;
    }
`;
