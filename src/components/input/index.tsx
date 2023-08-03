import React, { memo, forwardRef, Ref } from "react";

interface InputProps {
  className?: string;
  id?: string;
  label?: string;
  textarea?: boolean;
  error?: { message: string };
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  name: string;
  value?: string;
}

const Input = forwardRef<Ref<any>, InputProps>((props, ref: any) => {
  const {
    className,
    id,
    label,
    textarea,
    name = "",
    error,
    required,
    ...rest
  } = props;
  const Element = textarea ? "textarea" : "input";

  return (
    <div className={className}>
      <label htmlFor={id} className="form-label label">
        {label}
        {required && <span className="error-message">*</span>}
      </label>
      <Element className="form-control input" ref={ref} name={name} {...rest} />
      {error && <p className="error-message">{error.message}</p>}
    </div>
  );
});

export default memo(Input);
