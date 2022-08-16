import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
}

export const Input = ({ placeholder, label, ...rest }: InputProps) => {
  return (
    <>
      <div>
        {label && <label>{label}</label>}
        <input type="text" placeholder={placeholder} {...rest} />
      </div>
    </>
  );
};
