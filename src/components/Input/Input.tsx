import React from "react";

interface InputProps {
    label?: string;
    type?: "text" | "password" | "email";
    placeholder?: string;
    value?: string;
    errorMessage?: string;
    isRequired?: boolean;
    onChange?: (e: any) => void;
}

export const Input = ({
    label = "라벨",
    type = "text",
    placeholder = "값을 입력해 주세요.",
    value,
    errorMessage = "",
    isRequired = false,
    ...props
}: InputProps) => {
    return (
        <div className="input-group">
            <label>
                {label}
                {isRequired ? <span className="required">*</span> : ""}
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    className={["input"].join(" ")}
                    {...props}
                />
                {errorMessage.length ? (
                    <div className="error-message">{errorMessage}</div>
                ) : null}
            </label>
        </div>
    );
};
