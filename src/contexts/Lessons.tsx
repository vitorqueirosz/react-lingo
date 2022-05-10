import { WithChildren } from '@/types/global';
import { createContext, Dispatch, useContext, useState } from 'react';

type AnswersAmount = Record<string, number>;

type ContextDataProps = {
  currentStep: number;
  answersAmount: AnswersAmount;
  setAnswersAmount: Dispatch<React.SetStateAction<AnswersAmount>>;
  handleNextStep: () => void;
};

const defaultContextValues = {
  currentStep: 0,
  answersAmount: {
    wrongs: 0,
    corrects: 0,
  },
  setAnswersAmount: () => undefined,
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

  const handleNextStep = () => setCurrentStep((prevState) => prevState + 1);

  const value = {
    currentStep,
    answersAmount,
    setAnswersAmount,
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
