import * as React from "react";
import Image from "next/image";
import { StyledHeader } from "./styled";

export default function AskHeader() {
    return (
        <StyledHeader className="header">
            <Image
                width={70}
                height={50}
                src="https://charancha.com/uploads/carimg/xxlarge/2023/3e4ffb13-498b-4f52-aabd-868519518a26.jpg?w=1200&h=675&f=webp"
                alt="Picture of me"
            />
            <h1>삼둥이 (그랜져 IG)</h1>
            <span>10 시간</span>
        </StyledHeader>
    );
}
