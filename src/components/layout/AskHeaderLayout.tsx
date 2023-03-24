import AskHeader from "@/components/organisms/Header/AskHeader/index";
import { Container } from "./styled";
export default function AskHeaderLayout(props: { children: React.ReactNode }) {
    return (
        <>
            <Container>
                <AskHeader />
                {props.children}
            </Container>
        </>
    );
}
