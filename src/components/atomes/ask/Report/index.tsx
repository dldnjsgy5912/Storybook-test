import * as React from "react";
import { Input } from "@/components/atomes/Input/Input";
import { Button } from "@/components/atomes/Button/Button";
import { Container } from "@mui/material";
import { useState } from "react";
import { StyledReport } from "./styled";

export default function Report({
    toggleDrawer,
}: {
    toggleDrawer: (
        anchor: "bottom",
        open: boolean
    ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}) {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <Container fixed maxWidth="lg">
            <StyledReport>
                <h1>전문가 의견 양식</h1>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                    }}
                >
                    <Button
                        label="닫기"
                        variant="outlineBlue"
                        size="xsmall"
                        onClick={toggleDrawer("bottom", false)}
                    />
                </div>

                <form onSubmit={handleSubmit}>
                    <Input
                        label="차량정보의견"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <Input
                        label="성능기록부에 대한 의견"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <Input label="보험개발원에 대한 의견" />
                    <Input label="차량 등급이나 옵션/기능" />
                    <Input label="이전비, 차량세금등의 의견" />
                    <Input label="주행/성능 등의 의견" />
                    <Input label="가격 및 종합 의견" />
                    <Input label="예산으로 다른 모델 추천 의견" />

                    <Button
                        type="submit"
                        label="저장"
                        variant="outlineBlue"
                        size="xsmall"
                        onClick={() => {}}
                    />
                </form>
            </StyledReport>
        </Container>
    );
}
