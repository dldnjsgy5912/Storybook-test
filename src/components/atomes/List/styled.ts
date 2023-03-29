import styled from "styled-components";

export const StyledLists = styled.ul``;
export const StyledList = styled.li`
    cursor: pointer;
    padding: 1rem;

    :not(:first-child) {
        border-top: 1px solid ${({ theme }) => theme.Color.grayColor.gray40};
    }
`;
export const StyledListCarInfo = styled.div`
    margin-bottom: 2rem;
    ${({ theme }) => theme.Font.caption.depth1}
    .car-number {
        font-weight: 600;
        margin-right: 1rem;
        margin-bottom: 2rem;
    }
    .time-history {
        font-weight: 400;
    }
`;
export const StyledListTitleInfo = styled.div`
    margin-bottom: 2rem;
    h1 {
        ${({ theme }) => theme.Font.title}
        font-weight: 600;
    }
    span {
        ${({ theme }) => theme.Font.caption.depth1}
        color: ${({ theme }) => theme.Color.grayColor.gray70};
    }
`;
export const StyledListViewInfo = styled.div`
    display: flex;
    align-items: center;
    .like {
        margin-right: 1rem;
    }
    .comment {
        flex: 1;
    }
    .view {
        color: ${({ theme }) => theme.Color.grayColor.gray50};
    }
`;
