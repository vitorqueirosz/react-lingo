import { Footer } from '@/components';
import { useLessons } from '@/contexts';
import { useParams } from '@/hooks';
import { Language } from '@/pages/Home/Home';
import { setSpeakByWord } from '@/utils/speech';
import { useState } from 'react';

export type ImageProps = {
  title: string;
  images: {
    image: () => JSX.Element;
    title: string;
  }[];
  answer: string;
};

export const Image = ({ title, images, answer }: ImageProps) => {
  const { handleAnswerAmount } = useLessons();
  const language = useParams('language') as Language;

  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [selectedWord, setSelectedWord] = useState('');

  const hasAnswer = typeof isCorrectAnswer === 'boolean';

  const isSelected = (word: string) =>
    selectedWord === word
      ? 'bg-cyan-100 border-cyan-400'
      : 'hover:bg-slate-200';

  const handleCheckAnswer = () => {
    const isAnswerCorrect = selectedWord === answer;

    setIsCorrectAnswer(isAnswerCorrect);
    handleAnswerAmount(isAnswerCorrect);
  };

  const handleSelectWord = (word: string) => {
    setSelectedWord(word);
    setSpeakByWord(language, word);
  };

  return (
    <>
      <div className="flex justify-center flex-col w-full max-w-screen-md h-full">
        <h1 className="font-bold text-3xl text-slate-600">{title}</h1>

        <div className="flex justify-center items-center mt-16">
          {images.map(({ title, image: Image }) => (
            <button
              key={title}
              type="button"
              className={
                'border-2 border-b-4 border-neutral-200 rounded-xl p-2 mr-2 h-60 transition duration-100 ' +
                isSelected(title)
              }
              onClick={() => handleSelectWord(title)}
            >
              <div className="w-48 h-40 mb-4">
                <Image />
              </div>

              <span className="text-slate-400 font-medium">{title}</span>
            </button>
          ))}
        </div>
      </div>

      <Footer
        handleCheckAnswer={handleCheckAnswer}
        disabled={!selectedWord}
        isCorrectAnswer={isCorrectAnswer}
        answer={answer}
        hasAnswer={hasAnswer}
      />
    </>
  );
};
