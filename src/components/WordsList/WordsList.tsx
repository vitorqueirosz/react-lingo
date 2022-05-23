import { useParams } from '@/hooks';
import { Language } from '@/pages';
import { defaultStyles } from '@/pages/Lessons/components';
import { isMobile } from '@/utils/isMobile';
import { setSpeakByWord } from '@/utils/speech';
import { useRef } from 'react';

type WordsListProps = {
  words: string[];
  selectedWords: string[];
  handleSelectedWords: (words: string[]) => void;
  hasAnswer: boolean;
};

const SelectedWordsContainer = ({ style = '' }: { style?: string }) => (
  <div
    className={
      'absolute flex flex-wrap items-center h-20 w-full border-y-2 border-neutral-200 ' +
      style
    }
  />
);

export const WordsList = ({
  words,
  selectedWords,
  handleSelectedWords,
  hasAnswer,
}: WordsListProps) => {
  const language = useParams('language') as Language;

  const wordsRef = useRef<HTMLDivElement[] | null>([]);
  const answeredWordsRef = useRef<HTMLDivElement[] | null>([]);
  const answeredListRef = useRef<HTMLDivElement>(null);

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
        const filteredWords = selectedWords.filter((word) => word !== id);
        handleSelectedWords(filteredWords);
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
      const appendedWords = [...selectedWords, id];
      handleSelectedWords(appendedWords);
    }, 200);
  };

  return (
    <div className="relative">
      <SelectedWordsContainer />
      {isMobile() && <SelectedWordsContainer style="top-20 border-t-0" />}

      <div
        ref={answeredListRef}
        className="flex flex-wrap w-full gap-y-1 h-40 pt-2 md:h-20"
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
              disabled={hasAnswer}
            >
              {word}
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center w-full mt-8 flex-wrap gap-y-2">
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
                disabled={hasAnswer}
              >
                {word}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
