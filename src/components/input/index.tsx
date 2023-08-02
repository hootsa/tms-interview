import React, { forwardRef, ForwardedRef } from "react";

interface InputProps {
  type?: string;
  id: string;
  className?: string;
  name?: string;
  label: string;
  error?: { message: string };
  placeholder?: string;
  textarea?: boolean;
}

const Input = forwardRef(
  (
    {
      type = "text",
      id,
      className,
      name,
      label,
      error,
      placeholder,
      textarea,
      ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const InputComponent = textarea ? "textarea" : "input";

    return (
      <div className={className}>
        <label
          htmlFor={id}
          className="block text-base font-semibold leading-4 text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2.5">
          <InputComponent
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            className="block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-0 outline-none border border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            ref={ref}
            {...rest}
          />
          {error && (
            <p className="input-error-label error-message">{error.message}</p>
          )}
        </div>
      </div>
    );
  }
);

export default Input;
