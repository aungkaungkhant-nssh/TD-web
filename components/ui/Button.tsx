// src/components/Button.tsx
import React, { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "danger";
    className?: string;
    disabled?: boolean;
};

export default function Button({
    children,
    onClick,
    type = "button",
    className = "",
    disabled = false,
}: ButtonProps) {

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
