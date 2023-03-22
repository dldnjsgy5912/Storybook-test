import AskHeader from "@/components/organisms/Header/AskHeader/index";
import styled from "styled-components";
export default function AskHeaderLayout(props: { children: React.ReactNode }) {
    return (
        <>
            <Container>
                <FixedWidth>
                    <AskHeader />
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
