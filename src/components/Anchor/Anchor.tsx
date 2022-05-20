import { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { Icon, IconsKeys } from '../Icon/Icon';

type ButtonProps = {
  icon?: IconsKeys;
  isExternal?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const baseStyle =
  'flex items-center justify-center bg-green-500 font-bold rounded-xl p-2 px-4 text-white border-2 border-b-4 border-green-600 hover:bg-green-600 transition ease-in duration-300';

const ExternalLink = ({ children, ...props }: ButtonProps) => (
  <a className={baseStyle} {...props} target="_blank" rel="noreferrer noopener">
    {children}
  </a>
);

export const Anchor = ({
  children,
  icon,
  isExternal = false,
  ...props
}: ButtonProps) => {
  const Element = () =>
    isExternal ? (
      <ExternalLink {...props} />
    ) : (
      <Link to={props.href!} className={baseStyle} {...props}>
        {icon && <Icon icon={icon} />}
        {children}
      </Link>
    );

  return <Element />;
};
