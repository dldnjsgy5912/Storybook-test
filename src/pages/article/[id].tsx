import AnswerList from "@/components/atomes/article/AnswerList";
import React, { ReactElement } from "react";
import Question from "@/components/atomes/article/Question";
import { Container } from "@mui/material";
import AskHeaderLayout from "@/components/layout/AskHeaderLayout";
import { useRouter } from "next/router";

export default function Article() {
    const router = useRouter();

    return (
        <>
            <Question />
            <AnswerList />
        </>
    );
}

Article.getLayout = function getLayout(page: ReactElement) {
    return <AskHeaderLayout>{page}</AskHeaderLayout>;
};
