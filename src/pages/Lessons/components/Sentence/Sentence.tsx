import { ImgHTMLAttributes, useRef, useState } from 'react';

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
  const [answeredList, setAnsweredList] = useState<string[]>([]);

  const wordRef = useRef<HTMLDivElement | null>(null);
  const answeredListRef = useRef<HTMLDivElement | null>(null);

  const handleSelectWord = (id: string) => {
    const exists = answeredList.includes(id);

    if (exists) {
      setAnsweredList((prevState) => prevState.filter((word) => word !== id));
      wordRef.current!.style.transform = `translateX(0px) translateY(0px)`;

      return;
    }

    const wordBoundingLeft = wordRef.current!.getBoundingClientRect().left;
    const listBoundingLeft =
      answeredListRef.current!.getBoundingClientRect().left;

    const left = wordBoundingLeft - listBoundingLeft;
    const top =
      wordRef.current!.offsetTop - answeredListRef.current!.offsetTop - 10;

    wordRef.current!.style.transform = `translateX(-${left}px) translateY(-${top}px)`;

    setTimeout(() => {
      setAnsweredList((prevState) => [...prevState, id]);
    }, 300);
  };

  return (
    <div className="flex justify-center flex-col w-full max-w-screen-sm h-full">
      <h1 className="font-bold text-3xl text-slate-600">{title}</h1>

      <div className="flex items-center mt-6">
        <div className="h-44 ml-4">
          <Image />
        </div>

        <div className="border-2 border-neutral-200 p-4 rounded-md ml-4">
          <span>{sentence}</span>
        </div>
      </div>

      <div>
        <div
          ref={answeredListRef}
          className="flex flex-wrap items-center h-20 w-full border-y-2 border-neutral-200"
        >
          {answeredList.map((word) => (
            <div
              key={word}
              className="border-2 border-b-4 border-neutral-200 rounded-xl mr-1"
              style={{
                transition: 'all 0.5s ease-in-out',
                height: '60px',
              }}
            >
              <button
                className="p-4"
                type="button"
                onClick={() => handleSelectWord(word)}
              >
                {word}
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center w-full mt-12">
          {words.map((word) => (
            <div key={word} className="bg-gray-200 rounded-xl z-0 mr-1">
              <div
                className="border-2 z-10 bg-white relative border-b-4 border-neutral-200 rounded-xl "
                ref={wordRef}
                style={{
                  transition: 'all 0.3s ease-in-out',
                  height: '60px',
                }}
              >
                <button
                  className="p-4"
                  type="button"
                  onClick={() => handleSelectWord(word)}
                >
                  {word}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
