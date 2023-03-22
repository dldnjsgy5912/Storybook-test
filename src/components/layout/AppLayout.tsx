import styled from "styled-components";
import Header from "../organisms/Header/Header";

export default function AppLayout(props: { children: React.ReactNode }) {
    return (
        <>
            <Container>
                <FixedWidth>
                    <Header />
                    {props.children}
                </FixedWidth>
            </Container>
        </>
    );
}

const Container = styled.div`
    /* display: flex;
    justify-content: center; */
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
`;
const FixedWidth = styled.div``;
// width: 500px;
// @media (max-width: 500px) {
//     /* 화면 너비가 500px 이하가 되면 요소 너비를 100%로 고정*/
//     width: 100%;
// }
