import { ButtonHTMLAttributes } from 'react';
import { baseStyle } from '../Anchor/Anchor';

type ButtonProps = {
  icon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, icon, ...props }: ButtonProps) => {
  return (
    <button type="button" {...props} className={baseStyle}>
      {icon && icon}
      {children}
    </button>
  );
};
