import DetailHeader from "@/components/organisms/Header/DetailHeader/index";
import { Container } from "./styled";
export default function AskHeaderLayout(props: { children: React.ReactNode }) {
    return (
        <>
            <Container>
                <DetailHeader />
                {props.children}
                {/* <Footer /> */}
            </Container>
        </>
    );
}
