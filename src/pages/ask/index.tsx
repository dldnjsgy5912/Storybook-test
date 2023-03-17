import AnswerList from "@/components/atomes/ask/AnswerList";
import React from "react";
import Header from "@/components/atomes/ask/Header";
import Question from "@/components/atomes/ask/Question";
import { Container } from "@mui/material";

export default function Ask() {
    return (
        <Container fixed maxWidth="lg">
            <Header />
            <Question />
            <AnswerList />
        </Container>
    );
}
