import AnswerList from "@/components/organisms/post/AnswerList";
import React, { ReactElement } from "react";
import Question from "@/components/organisms/post/Question";
import { Container } from "@mui/material";
import DetailHeaderLayout from "@/components/layout/DetailHeaderLayout";
import { useRouter } from "next/router";

export default function Post() {
    const router = useRouter();

    return (
        <>
            <Question />
            <AnswerList />
        </>
    );
}

Post.getLayout = function getLayout(page: ReactElement) {
    return <DetailHeaderLayout>{page}</DetailHeaderLayout>;
};
