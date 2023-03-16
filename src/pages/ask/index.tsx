import AnswerList from "@/components/atomes/ask/AnswerList";
import React from "react";
import Header from "@/components/atomes/ask/Header";
import Question from "@/components/atomes/ask/Question";
import { Container } from "@mui/material";

const answers = [
    {
        title: "스물원드 (3시리즈 (G30)",
        context: `차란차 대물이 더 중온거같습니다.
        가격대비 주행거리나 색상부분에서
        희소성이있습니다.`,
        time: 3,
    },
    {
        title: "익명 (1시리즈 (RO)",
        context: `저는 연식 높온거어 한표 저정도 주행거리는`,
        time: 2,
    },
    {
        title: "익명 (1시리즈 (RO)",
        context: `저는 연식 높온거어 한표 저정도 주행거리는`,
        time: 2,
    },
    {
        title: "익명 (1시리즈 (RO)",
        context: `저는 연식 높온거어 한표 저정도 주행거리는`,
        time: 2,
    },
];

export default function Ask() {
    return (
        <Container fixed maxWidth="lg">
            <Header />
            <Question answersLength={answers.length} />
            <AnswerList answers={answers} />
        </Container>
    );
}
