import * as React from "react";
import Image from "next/image";
import { StyledTopArea } from "../Default/styled";
import Link from "next/link";
import { TextButton } from "@/components/atomes/Button/Text/TextButton";
import { useRouter } from "next/router";
import { StyledDetailHeader } from "./styled";

export default function DetailHeader() {
    const router = useRouter();
    return (
        <StyledDetailHeader>
            <StyledTopArea>
                <i className="icon-Arrow-Back" onClick={() => router.back()} />
                <h1>상세페이지</h1>
            </StyledTopArea>
        </StyledDetailHeader>
    );
}
