import { useEffect, useMemo, useState } from 'react';

import { Footer } from '@/components';

type Word = {
  value: string;
  ref: string;
};

export type MatchWordsProps = {
  title: string;
  words: Word[][];
};

const defaultMatchValue = {
  left: { value: '', ref: '' },
  right: { value: '', ref: '' },
};

const errorStyles = {
  backgroundColor: '#ff9e9e',
  borderColor: '#dc7171',
  color: '#ab3434',
};

const successStyles = {
  backgroundColor: '#5fffb2',
  borderColor: '#41c487',
  color: '#1f9f63',
};

const disabledStyles = {
  backgroundColor: '#f4f4f4',
  borderColor: '#e6e5e5',
  color: '#aeaeae',
  cursor: 'initial',
};

export const MatchWords = ({ title, words }: MatchWordsProps) => {
  const [match, setMatch] = useState(defaultMatchValue);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [selectedWord, setSelectedWord] = useState('');

  const [successPairs, setSuccessPairs] = useState<string[]>([]);
  const [errorPairs, setErrorPairs] = useState<string[]>([]);
  const [matchedWords, setMatchedWords] = useState<string[]>([]);

  const selectedStyles = (word: string) =>
    selectedWord === word
      ? 'bg-cyan-100 border-cyan-400 text-cyan-600'
      : 'bg-white border-neutral-200';

  const selectedTextStyle = (word: string) =>
    selectedWord === word ? 'text-cyan-600' : 'text-slate-500 ';

  const hasAnswer = typeof isCorrectAnswer === 'boolean';

  const handleSelectWord = (parentIndex: number, value: Word) => {
    const key = parentIndex === 0 ? 'left' : 'right';
    const anotherKey = parentIndex === 0 ? 'right' : 'left';

    const translatedValue = match[anotherKey];

    setMatch((prevState) => ({
      ...prevState,
      [key]: value,
    }));

    const handleSetMatch = (hasMatch: boolean) => {
      if (hasMatch) {
        setSuccessPairs([value.value, translatedValue.value]);
        setSelectedWord('');

        setTimeout(() => {
          setSuccessPairs([]);
          setMatchedWords((prevState) => [
            ...prevState,
            value.value,
            translatedValue.value,
          ]);
        }, 500);
      } else {
        setErrorPairs([value.value, translatedValue.value]);
        setSelectedWord('');

        setTimeout(() => {
          setErrorPairs([]);
        }, 500);
      }
    };

    if (translatedValue.value) {
      const hasMatch = value.ref === translatedValue.value;

      handleSetMatch(hasMatch);
      setMatch(defaultMatchValue);
    } else {
      setSelectedWord(value.value);
    }
  };

  const isAllSelected = useMemo(() => {
    const wordsAmount = words.reduce((acc, word) => {
      return (acc = acc + word.length);
    }, 0);

    return matchedWords.length === wordsAmount;
  }, [matchedWords.length, words]);

  useEffect(() => {
    if (isAllSelected) setIsCorrectAnswer(true);
  }, [isAllSelected]);

  return (
    <>
      <div className="flex justify-center flex-col w-full max-w-screen-md h-full">
        <h1 className="font-bold text-3xl text-slate-600 mb-10">{title}</h1>

        <div className="flex items-center justify-center w-full mb-14">
          {words.map((words, parentIndex) => (
            <div
              key={'wordsContainer' + parentIndex}
              className="flex flex-col first:mr-8"
            >
              {words.map((word, index) => (
                <button
                  key={word.value}
                  className={
                    'flex items-center border-2 border-b-4 border-neutral-200 rounded-xl bg-white w-64 py-2 pl-2 mb-2 cursor-pointer ' +
                    selectedStyles(word.value)
                  }
                  onClick={() => handleSelectWord(parentIndex, word)}
                  style={{
                    ...(successPairs.includes(word.value) && successStyles),
                    ...(errorPairs.includes(word.value) && errorStyles),
                    ...(matchedWords.includes(word.value) && disabledStyles),
                  }}
                  disabled={matchedWords.includes(word.value)}
                >
                  <div
                    className={
                      'border-2 border-neutral-200 flex justify-center items-center rounded-lg w-8 h-8 ml-2 ' +
                      selectedStyles(word.value)
                    }
                    style={{
                      ...(successPairs.includes(word.value) && successStyles),
                      ...(errorPairs.includes(word.value) && errorStyles),
                      ...(matchedWords.includes(word.value) && disabledStyles),
                    }}
                  >
                    {index + 1}
                  </div>
                  <span
                    className={
                      'flex-1 text-center font-semibold mr-2 ' +
                      selectedTextStyle(word.value)
                    }
                    style={{
                      ...(successPairs.includes(word.value) && successStyles),
                      ...(errorPairs.includes(word.value) && errorStyles),
                      ...(matchedWords.includes(word.value) && disabledStyles),
                    }}
                  >
                    {word.value}
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Footer
        disabled={!isAllSelected}
        isCorrectAnswer={isCorrectAnswer}
        hasAnswer={hasAnswer}
      />
    </>
  );
};
