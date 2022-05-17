import { useLessons } from '@/contexts';

export const Result = () => {
  const { answersAmount } = useLessons();

  return <div>{answersAmount.corrects}</div>;
};
