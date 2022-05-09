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

  const wordsRef = useRef<HTMLDivElement[] | null>([]);
  const answeredListRef = useRef<HTMLDivElement>(null);

  const handleSelectWord = (id: string, index: number) => {
    const exists = answeredList.includes(id);
    const currentWordRef = wordsRef.current![index];
    const currentAnsweredList = answeredListRef.current!;

    if (exists) {
      setAnsweredList((prevState) => prevState.filter((word) => word !== id));
      currentWordRef.style.transform = `translateX(0px) translateY(0px)`;

      return;
    }

    const wordBoundingLeft = currentWordRef.getBoundingClientRect().left;
    const listBoundingLeft = currentAnsweredList.getBoundingClientRect().left;

    const left = wordBoundingLeft - listBoundingLeft;
    const top = currentWordRef.offsetTop - currentAnsweredList.offsetTop - 10;

    currentWordRef.style.transform = `translateX(-${left}px) translateY(-${top}px)`;

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
          {answeredList.map((word, index) => (
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
                onClick={() => handleSelectWord(word, index)}
              >
                {word}
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center w-full mt-12">
          {words.map((word, index) => (
            <div key={word} className="bg-gray-200 rounded-xl z-0 mr-1">
              <div
                className="border-2 z-10 bg-white relative border-b-4 border-neutral-200 rounded-xl "
                ref={(ref) => {
                  ref ? (wordsRef.current![index] = ref) : null;
                }}
                style={{
                  transition: 'all 0.3s ease-in-out',
                  height: '60px',
                }}
              >
                <button
                  className="p-4"
                  type="button"
                  onClick={() => handleSelectWord(word, index)}
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
