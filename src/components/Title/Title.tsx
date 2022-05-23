type TitleProps = { children: string };

export const Title = ({ children }: TitleProps) => (
  <h1 className="font-bold text-3xl text-slate-600 mb-2 text-center md:text-left">
    {children}
  </h1>
);
