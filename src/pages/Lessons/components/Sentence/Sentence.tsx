import { ImgHTMLAttributes } from 'react';

export type SentenceProps = {
  title: string;
  image: (props: ImgHTMLAttributes<HTMLImageElement>) => JSX.Element;
  words: string[];
  sentence: string;
};

export const Sentence = ({
  title,
  image: Image,
  words,
  sentence,
}: SentenceProps) => {
  return (
    <div className="flex justify-center flex-col w-full max-w-screen-sm  pt-20">
      <h1 className="font-bold text-3xl text-slate-600">{title}</h1>

      <div className="flex items-center">
        <div className="h-44 ml-4">
          <Image />
        </div>

        <div className="border-2 border-neutral-200 p-4 rounded-md ml-4">
          <span>{sentence}</span>
        </div>
      </div>

      <div className="h-16 w-full border-y-2 border-neutral-200">test</div>

      <div className="flex items-center justify-center w-full mt-12">
        {words.map((word) => (
          <div
            key={word}
            className="border-2 border-neutral-200 rounded-xl mr-2"
          >
            <button className="p-4" type="button">
              {word}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
