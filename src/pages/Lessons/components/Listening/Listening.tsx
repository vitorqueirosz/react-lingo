import { useState } from 'react';

import { Footer, WordsList } from '@/components';
import { useLessons } from '@/contexts';
import { Language } from '@/pages/Home/Home';
import { setSpeakByWord } from '@/utils/speech';

export type ListeningProps = {
  answer: string;
  words: string[];
  title: string;
  sentence: {
    language: Language;
    value: string;
  };
  images: { image: () => JSX.Element; speed: number }[];
};

export const Listening = ({
  answer,
  words,
  title,
  sentence,
  images,
}: ListeningProps) => {
  const { setAnswersAmount } = useLessons();

  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);

  const hasAnswer = typeof isCorrectAnswer === 'boolean';

  const handleCheckAnswer = () => {
    const joinnedWords = selectedWords.join(' ').toLowerCase();
    const isAnswerCorrect = joinnedWords === answer;
    const key = isAnswerCorrect ? 'correct' : 'wrong';

    setIsCorrectAnswer(isAnswerCorrect);
    setAnswersAmount((prevState) => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  };

  const handleSpeakSentence = (speed: number) => {
    const { language, value } = sentence;

    setSpeakByWord(language, value, speed);
  };

  const handleSelectedWords = (words: string[]) => setSelectedWords(words);

  return (
    <>
      <div className="flex justify-center flex-col w-full max-w-screen-md h-full">
        <h1 className="font-bold text-3xl text-slate-600 mb-10">{title}</h1>

        <div className="flex items-end justify-center mb-10">
          {images.map(({ image: Image, speed }, index) => (
            <button
              key={'imageSound' + index}
              className="border-1 border-b-4 border-b-sky-600 rounded-3xl bg-sky-400 p-1 w-20 h-20 flex justify-center items-center mr-6 first:h-24 first:w-24 hover:bg-sky-500"
              onClick={() => handleSpeakSentence(speed)}
            >
              <Image />
            </button>
          ))}
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
