import { IcChevronLeft } from '@/assets/icons';

export type CardProps = {
  title: string;
  handleSelectedLanguage?: () => void;
  hasIcon?: boolean;
  style?: string;
  children: React.ReactNode;
};

export const Card = ({
  title,
  handleSelectedLanguage,
  hasIcon,
  style,
  children,
}: CardProps) => {
  return (
    <div
      className={
        'flex flex-col justify-center items-center mt-16 bg-slate-400 rounded-md w-96 h-40 p-1' +
        style
      }
    >
      {hasIcon && (
        <IcChevronLeft
          className="absolute left-2 w-7 top-2 bg-slate-500 rounded-2xl mr-8 text-green-200 cursor-pointer"
          onClick={handleSelectedLanguage}
        />
      )}

      <h3 className="text-3xl font-bold text-slate-50">{title}</h3>

      <div className="flex justify-center items-center mt-8 gap-2">
        {children}
      </div>
    </div>
  );
};
