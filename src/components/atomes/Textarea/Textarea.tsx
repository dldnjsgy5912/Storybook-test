import React from "react";

interface TextareaProps {
    label?: string;
    placeholder?: string;
    value?: any;
    errorMessage?: string;
    isRequired?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    name?: string;
}

export const Textarea = ({
    label = "라벨",
    placeholder,
    value,
    errorMessage = "",
    isRequired = false,
    ...props
}: TextareaProps) => {
    return (
        <div className="input-group">
            <label>
                {label}
                {isRequired ? <span className="required">*</span> : ""}
                <textarea placeholder={placeholder} value={value} {...props} />
                {errorMessage.length ? <div className="error-message">{errorMessage}</div> : null}
            </label>
        </div>
    );
};
