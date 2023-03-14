import theme from "@/components/common/theme";
import React, { useRef, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { Button } from "../atomes/Button/Button";
import { Input } from "../atomes/Input/Input";
interface FormContextProps {
    children?: React.ReactNode;
}
export const Form = ({ children }: FormContextProps) => {
    const userId = useRef("");
    const password = useRef("");

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: React.MutableRefObject<string>
    ) => {
        const value = e.target.value;
        type.current = value;
    };

    const RegistHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(userId.current, password.current);
    };

    return (
        <form onSubmit={RegistHandler}>
            {children}
            <Button label="로그인" variant="soildBlue" type="submit" />
        </form>
    );
};
