import Header from "../organisms/Header/Default/Header";
import { Container } from "./styled";

export default function AppLayout(props: { children: React.ReactNode }) {
    return (
        <>
            <Container>
                <Header />
                {props.children}
                {/* <Footer /> */}
            </Container>
        </>
    );
}
