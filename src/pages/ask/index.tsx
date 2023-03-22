import AnswerList from "@/components/atomes/ask/AnswerList";
import React, { ReactElement } from "react";
import Question from "@/components/atomes/ask/Question";
import { Container } from "@mui/material";
import AskHeaderLayout from "@/components/layout/AskHeaderLayout";

export default function Ask() {
    return (
        <>
            {/* <Container fixed maxWidth="lg"> */}
            <Question />
            <AnswerList />
            {/* </Container> */}
        </>
    );
}

Ask.getLayout = function getLayout(page: ReactElement) {
    return <AskHeaderLayout>{page}</AskHeaderLayout>;
};
