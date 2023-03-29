import * as React from "react";
import { StyledFooter } from "./styled";
import { Button } from "@/components/atomes/Button/Container/Button";

export default function Footer() {
    return (
        <StyledFooter>
            <Button label="홈" size="small" />
            <Button size="small" />
            <Button size="small" />
            <Button size="small" />
        </StyledFooter>
    );
}
