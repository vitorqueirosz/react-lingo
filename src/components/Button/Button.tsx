import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  icon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, icon, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      {...props}
      className="bg-green-600 rounded-md p-1 text-white border-2 border-green-700 hover:bg-green-700 transition ease-in duration-300"
    >
      {icon && icon}
      {children}
    </button>
  );
};
