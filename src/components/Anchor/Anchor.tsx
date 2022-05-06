import { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  icon?: React.ReactNode;
  isExternal?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const baseStyle =
  'bg-green-500 rounded-md p-1 px-3 text-white border-2 border-green-600 hover:bg-green-600 transition ease-in duration-300';

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
        {icon && icon}
        {children}
      </Link>
    );

  return <Element />;
};
