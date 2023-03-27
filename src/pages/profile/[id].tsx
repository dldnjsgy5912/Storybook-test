import React, { ReactElement } from "react";
import { useRouter } from "next/router";

export default function Ask() {
    const router = useRouter();

    return <>프로필 페이지 입니다. {router.query.id}</>;
}
