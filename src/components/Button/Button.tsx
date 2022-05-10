import { ButtonHTMLAttributes } from 'react';
import { baseStyle } from '../Anchor/Anchor';

type ButtonProps = {
  icon?: React.ReactNode;
  size?: 'large' | 'normal';
  color?: 'secondary';
  upperCase?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const sizes = {
  normal: 'auto',
  large: '140px',
};

const colors = {
  secondary: {
    backgroundColor: '#fff',
    color: '#999',
    borderColor: '#ddd',
  },
};

const disabledStyles = {
  backgroundColor: '#ddd',
  color: '#999',
  borderColor: 'transparent',
  cursor: 'default',
};

export const Button = ({
  children,
  icon,
  size = 'normal',
  color,
  upperCase = false,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      {...props}
      className={baseStyle}
      style={{
        width: sizes[size],
        ...(color && { ...colors[color] }),
        ...(disabled && { ...disabledStyles }),
        textTransform: upperCase ? 'uppercase' : 'initial',
      }}
    >
      {icon && icon}
      {children}
    </button>
  );
};
