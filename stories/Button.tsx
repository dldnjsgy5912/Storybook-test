import React from "react";
import "./button.css";

interface ButtonProps {
    mode?: string;
    size?: "tiny" | "xsmall" | "small" | "medium" | "large" | "xlarge";
    label: string;
    backgroundColor?: string;
    isDisabled?: boolean;
    isLoadiong?: boolean;
    isStatus?: boolean;
    onClick?: () => void;
}

export const Button = ({
    mode = "A1",
    size = "medium",
    label,
    backgroundColor,
    isDisabled = false,
    isLoadiong = false,
    isStatus = false,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            disabled={isDisabled}
            className={[
                "storybook-button",
                `storybook-button--${size} ${isStatus ? `${mode}-off` : ""}`,
                `storybook-button--${mode}`,
            ].join(" ")}
            style={{ backgroundColor }}
            {...props}
        >
            {isLoadiong ? <span className="loader"></span> : label}
        </button>
    );
};
