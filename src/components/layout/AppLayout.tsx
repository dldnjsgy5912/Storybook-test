import styled from "styled-components";
import Header from "../organisms/Header/Header";
import { Container } from "./styled";

export default function AppLayout(props: { children: React.ReactNode }) {
    return (
        <>
            <Container>
                <Header />
                {props.children}
            </Container>
        </>
    );
}
