import * as Icons from '@/assets/icons';

type IconProps = {
  icon: IconsKeys;
  className?: string;
};

export type IconsKeys = keyof typeof Icons;

export const Icon = ({ icon, className }: IconProps) => {
  const Element = () => Icons[icon]({ className: 'w-8 h-8 mr-2 ' + className });

  return <Element />;
};
