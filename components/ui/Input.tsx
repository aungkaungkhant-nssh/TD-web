import React, { forwardRef } from "react";

type InputProps = {
    type?: string;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            type = "text",
            name,
            value,
            onChange,
            placeholder = "",
            className = "",
            label,
            required = false,
            disabled = false,
            error,
            ...rest
        },
        ref
    ) => {
        return (
            <div className={`flex flex-col `}>
                {label && (
                    <label htmlFor={name} className="mb-2 font-medium">
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    ref={ref}
                    {...rest}
                    className={`p-2 border rounded focus:outline-none  ${error ? "border-red-500" : "border-gray-300"
                        } ${disabled ? "bg-gray-100" : ""} ${className}`}
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
