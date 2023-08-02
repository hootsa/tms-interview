import React, { ChangeEvent } from "react";
import Input from ".";

type PhoneInputProps = InputProps & {
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const formatPhoneNumber = (inputValue: string): string => {
  const digitsOnly = inputValue?.replace(/\D/g, "");
  const firstThreeDigits = digitsOnly?.slice(0, 3);
  const nextThreeDigits = digitsOnly?.slice(3, 6);
  const lastFourDigits = digitsOnly?.slice(6, 10);

  let formattedPhoneNumber = "";

  if (digitsOnly?.length > 6) {
    formattedPhoneNumber = `(${firstThreeDigits}) ${nextThreeDigits}-`;
  } else if (digitsOnly?.length > 3) {
    formattedPhoneNumber = `(${firstThreeDigits}) ${nextThreeDigits}`;
  } else if (digitsOnly?.length > 0) {
    formattedPhoneNumber = `(${firstThreeDigits}`;
  }

  formattedPhoneNumber += lastFourDigits;

  return formattedPhoneNumber;
};

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ name, id, error, value, onChange, ...rest }, ref) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const formattedValue = formatPhoneNumber(value);

      if (onChange) {
        onChange({
          target: {
            name,
            value: formattedValue.replace(/\D/g, "").slice(0, 10), // Save only the first 10 digits
          },
        });
      }
    };

    return (
      <Input
        type="text"
        id={id}
        name={name}
        label="Phone Number"
        value={formatPhoneNumber(value)}
        onChange={handleChange}
        error={error}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default PhoneInput;
