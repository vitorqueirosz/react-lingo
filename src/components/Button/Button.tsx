import { ButtonHTMLAttributes } from 'react';
import { baseStyle } from '../Anchor/Anchor';

type ButtonProps = {
  icon?: React.ReactNode;
  size?: 'large' | 'normal';
  color?: 'secondary';
  upperCase?: boolean;
  hasError?: boolean;
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

const errorStyles = {
  backgroundColor: '#D45454',
  borderColor: '#BE3030',
  transitionDuration: 'initial',
};

export const Button = ({
  children,
  icon,
  size = 'normal',
  color,
  upperCase = false,
  disabled,
  hasError,
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
        ...(hasError && { ...errorStyles }),
        ...(disabled && { ...disabledStyles }),
        textTransform: upperCase ? 'uppercase' : 'initial',
      }}
      disabled={disabled}
    >
      {icon && icon}
      {children}
    </button>
  );
};
