import theme from "@/components/common/theme";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Button } from "../atomes/Button/Button";
import { Input } from "../atomes/Input/Input";

interface ButtonProps {}

export const Form = ({}: ButtonProps) => {
    return (
        <form>
            <Input label="아이디" />
            <Input label="비밀번호" type="password" />
            <Button label="로그인" variant="soildBlue" />
        </form>
    );
};
