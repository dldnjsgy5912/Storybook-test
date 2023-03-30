import React, { useRef } from "react";
import { Button } from "@/components/atomes/Button/Container/Button";

interface FormContextProps {
    children?: React.ReactNode;
}
export const Form = ({ children }: FormContextProps) => {
    const userId = useRef("");
    const password = useRef("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: React.MutableRefObject<string>) => {
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
