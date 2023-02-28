import React from "react";
import { AiFillHome } from "react-icons/ai";
interface ButtonProps {
    mode?: string;
    size?: "tiny" | "xsmall" | "small" | "medium" | "large" | "xlarge";
    label: string;
    backgroundColor?: string;
    isDisabled?: boolean;
    isLoadiong?: boolean;
    isStatus?: boolean;
    isIcon?: boolean;
    onClick?: () => void;
}

export const Button = ({
    mode = "soild-blue",
    size = "medium",
    label,
    backgroundColor,
    isDisabled = false,
    isLoadiong = false,
    isStatus = false,
    isIcon = false,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            disabled={isDisabled}
            className={[
                "button",
                `button--${mode}`,
                `button--${size}`,
                `${isStatus ? `${mode}-off` : ""}`,
                `${isLoadiong ? "notWorkEvent" : ""}`,
            ].join(" ")}
            style={{ backgroundColor }}
            {...props}
        >
            {isIcon ? <AiFillHome className="button--icon" /> : ""}
            {isLoadiong ? <span className="loader"></span> : label}
        </button>
    );
};
