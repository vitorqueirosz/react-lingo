import { ImgHTMLAttributes, useRef, useState } from 'react';
import { useParams } from '@/hooks/useParams';
import { Language } from '@/pages/Home/Home';
import { setSpeakByWord } from '@/utils/speech';
import { IcSound } from '@/assets/icons';
import { Footer } from '@/components';

export type SentenceProps = {
  title: string;
  image: (props: ImgHTMLAttributes<HTMLImageElement>) => JSX.Element;
  words: string[];
  sentence: string;
  answer: string;
};

const defaultStyles = {
  transition: 'transform 0.2s ease-in-out',
  height: '60px',
};

export const Sentence = ({
  title,
  image: Image,
  words,
  sentence,
  answer,
}: SentenceProps) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);

  const wordsRef = useRef<HTMLDivElement[] | null>([]);
  const answeredWordsRef = useRef<HTMLDivElement[] | null>([]);
  const answeredListRef = useRef<HTMLDivElement>(null);

  const language = useParams('language') as Language;

  const handleCheckAnswer = () => {
    const joinnedWords = selectedWords.join(' ').toLowerCase();
    setIsCorrectAnswer(joinnedWords === answer);
  };

  const handleSelectWord = (id: string, index: number) => {
    const exists = selectedWords.includes(id);
    const currentWordRef = wordsRef.current![index];
    const currentAnsweredList = answeredListRef.current!;

    setSpeakByWord(language, id);

    if (exists) {
      const wordIndex = wordsRef.current!.findIndex(
        (word) => word.innerText === id,
      );

      const currentAnsweredRef = answeredWordsRef.current![index];
      const currentWordRef = wordsRef.current![wordIndex];

      const lastChildrenFromAnswered =
        currentAnsweredRef.lastElementChild as HTMLButtonElement;

      const lastChildrenFromWord =
        currentWordRef.lastElementChild as HTMLButtonElement;

      const currentWordLeft = currentWordRef.offsetLeft;
      const currentAnsweredLeft = currentAnsweredRef.offsetLeft;
      const left = currentWordLeft - currentAnsweredLeft;

      const currentWordTop = currentWordRef.offsetTop;
      const currentAnsweredTop = currentAnsweredRef.offsetTop;
      const top = currentWordTop - currentAnsweredTop;

      currentAnsweredRef.style.transform = `translateX(${left}px) translateY(${top}px)`;
      lastChildrenFromAnswered.disabled = true;

      setTimeout(() => {
        currentWordRef.style.opacity = '1';
        lastChildrenFromWord.disabled = false;
        setSelectedWords((prevState) =>
          prevState.filter((word) => word !== id),
        );
      }, 200);

      return;
    }

    const lastChildrenFromWord =
      currentWordRef.lastElementChild as HTMLButtonElement;

    const wordBoundingLeft = currentWordRef.offsetLeft;
    const listBoundingLeft = currentAnsweredList.offsetLeft;

    const lastChildrenOnList = currentAnsweredList.lastElementChild;
    const lastChildrenBoundings = lastChildrenOnList?.getBoundingClientRect();

    const dynamicLeft =
      lastChildrenBoundings &&
      lastChildrenBoundings.left + lastChildrenBoundings.width + 4;

    const listLeft = dynamicLeft || listBoundingLeft;

    const left = wordBoundingLeft - listLeft;
    const top = currentWordRef.offsetTop - currentAnsweredList.offsetTop - 10;

    currentWordRef.style.transform = `translateX(-${left}px) translateY(-${top}px)`;
    lastChildrenFromWord.disabled = true;

    setTimeout(() => {
      currentWordRef.style.opacity = '0';
      currentWordRef.style.transform = `translateX(0px) translateY(0px)`;
      setSelectedWords((prevState) => [...prevState, id]);
    }, 200);
  };

  const handleSelectSentence = () => setSpeakByWord(language, sentence);

  return (
    <>
      <div className="flex justify-center flex-col w-full max-w-screen-sm h-full">
        <h1 className="font-bold text-3xl text-slate-600">{title}</h1>

        <div className="flex items-center mt-6">
          <div className="h-44 ml-4">
            <Image />
          </div>

          <div className="flex items-center border-2 border-neutral-200 rounded-md ml-4 p-4">
            <button type="button" onClick={handleSelectSentence}>
              <IcSound className="w-8 mr-3" />
            </button>
            <span>{sentence}</span>
          </div>
        </div>

        <div>
          <div
            ref={answeredListRef}
            className="flex flex-wrap items-center h-20 w-full border-y-2 border-neutral-200"
          >
            {selectedWords.map((word, index) => (
              <div
                ref={(ref) => {
                  ref ? (answeredWordsRef.current![index] = ref) : null;
                }}
                key={word}
                className="border-2 border-b-4 border-neutral-200 rounded-xl mr-1 z-10 bg-white"
                style={defaultStyles}
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
                  style={defaultStyles}
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
      <Footer
        handleCheckAnswer={handleCheckAnswer}
        disabled={!selectedWords.length}
        isCorrectAnswer={isCorrectAnswer}
      />
    </>
  );
};
