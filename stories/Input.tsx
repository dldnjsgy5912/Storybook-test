import React from "react";
import "./input.css";

interface InputProps {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string;
}

export const Input = ({
    label = "라벨",
    type = "text",
    placeholder = "미리보기",
    value,
    ...props
}: InputProps) => {
    return (
        <label>
            {label}
            <input
                type={"text"}
                placeholder={placeholder}
                value={value}
                className={["storybook-button"].join(" ")}
                {...props}
            />
        </label>
    );
};
