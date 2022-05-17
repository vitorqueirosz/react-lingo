import { createContext, useCallback, useContext, useState } from 'react';
import { WithChildren } from '@/types/global';

type AnswersAmount = {
  wrongs: number;
  corrects: number;
};

type ContextDataProps = {
  currentStep: number;
  answersAmount: AnswersAmount;
  handleAnswerAmount: (isAnswerCorrect: boolean) => void;
  handleNextStep: () => void;
};

const defaultContextValues = {
  currentStep: 0,
  answersAmount: {
    wrongs: 0,
    corrects: 0,
  },
  handleAnswerAmount: () => undefined,
  handleNextStep: () => undefined,
};

const LessonsContext = createContext<ContextDataProps>(defaultContextValues);

export const LessonsProvider = ({ children }: WithChildren) => {
  const [currentStep, setCurrentStep] = useState(
    defaultContextValues.currentStep,
  );
  const [answersAmount, setAnswersAmount] = useState<AnswersAmount>(
    defaultContextValues.answersAmount,
  );

  const handleAnswerAmount = useCallback((isAnswerCorrect: boolean) => {
    const key = isAnswerCorrect ? 'corrects' : 'wrongs';

    setAnswersAmount((prevState) => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  }, []);

  const handleNextStep = () => setCurrentStep((prevState) => prevState + 1);

  const value = {
    currentStep,
    answersAmount,
    handleAnswerAmount,
    handleNextStep,
  };

  return (
    <LessonsContext.Provider value={value}>{children}</LessonsContext.Provider>
  );
};

export const useLessons = () => {
  const provider = useContext(LessonsContext);

  if (!provider) throw new Error('Must be inside a LessonsProvider');

  return provider;
};
