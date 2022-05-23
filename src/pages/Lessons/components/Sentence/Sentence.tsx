import { ImgHTMLAttributes, useCallback, useRef, useState } from 'react';

import { Language } from '@/pages/Home/Home';
import { setSpeakByWord } from '@/utils/speech';
import { IcSound } from '@/assets/icons';
import { Footer, Title, WordsList } from '@/components';
import { useLessons } from '@/contexts';
import { useSetVoiceOnMount } from '@/hooks/useSetVoiceOnMount';

export type SentenceProps = {
  title: string;
  image: (props: ImgHTMLAttributes<HTMLImageElement>) => JSX.Element;
  words: string[];
  sentence: {
    language: Language;
    value: string;
  };
  answer: string;
};

export const defaultStyles = {
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
  const { handleAnswerAmount } = useLessons();

  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useSetVoiceOnMount(sentence.language, sentence.value);

  const hasAnswer = typeof isCorrectAnswer === 'boolean';

  const handleCheckAnswer = () => {
    const joinnedWords = selectedWords.join(' ').toLowerCase();
    const isAnswerCorrect = joinnedWords === answer;

    setIsCorrectAnswer(isAnswerCorrect);
    handleAnswerAmount(isAnswerCorrect);
  };

  const handleSelectedWords = (words: string[]) => setSelectedWords(words);

  const handleSelectSentence = useCallback(() => {
    const { language, value } = sentence;

    setSpeakByWord(language, value);
  }, [sentence]);

  return (
    <>
      <div className="flex justify-center flex-col w-full max-w-screen-sm h-full">
        <Title>{title}</Title>

        <div className="flex items-center mt-6">
          <div className="h-44 ml-4">
            <Image />
          </div>

          <div className="flex items-center border-2 border-neutral-200 rounded-md ml-4 p-4">
            <button
              type="button"
              onClick={handleSelectSentence}
              ref={buttonRef}
            >
              <IcSound className="w-8 mr-3 text-cyan-500" />
            </button>
            <span>{sentence.value}</span>
          </div>
        </div>

        <WordsList
          words={words}
          hasAnswer={hasAnswer}
          selectedWords={selectedWords}
          handleSelectedWords={handleSelectedWords}
        />
      </div>
      <Footer
        handleCheckAnswer={handleCheckAnswer}
        disabled={!selectedWords.length}
        isCorrectAnswer={isCorrectAnswer}
        answer={answer}
        hasAnswer={hasAnswer}
      />
    </>
  );
};
