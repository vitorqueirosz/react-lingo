import { ButtonHTMLAttributes } from 'react';
import { baseStyle } from '../Anchor/Anchor';
import { Icon, IconsKeys } from '@/components';

type ButtonProps = {
  icon?: IconsKeys;
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

const iconStyles = {
  minWidth: '10rem',
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
        ...(icon && { ...iconStyles }),
        textTransform: upperCase ? 'uppercase' : 'initial',
      }}
      disabled={disabled}
    >
      {icon && <Icon icon={icon} />}
      {children}
    </button>
  );
};
