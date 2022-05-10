import { useLessons } from '@/contexts';
import { Button } from '@/components';

type FooterProps = {
  handleCheckAnswer: () => void;
  disabled: boolean;
  isCorrectAnswer: boolean | null;
};

export const Footer = ({
  handleCheckAnswer,
  disabled,
  isCorrectAnswer,
}: FooterProps) => {
  const { handleNextStep } = useLessons();

  const stateStyle =
    typeof isCorrectAnswer === 'boolean' &&
    (isCorrectAnswer ? 'bg-green-300' : 'bg-red-300');

  return (
    <footer
      className={'border-t-2 border-neutral-200 h-36 w-full ' + stateStyle}
    >
      <div className="flex m-auto justify-between items-center h-full w-full max-w-3xl">
        <Button
          color="secondary"
          size="large"
          upperCase
          onClick={handleNextStep}
        >
          Skip
        </Button>

        <Button
          size="large"
          upperCase
          onClick={handleCheckAnswer}
          disabled={disabled}
        >
          Check
        </Button>
      </div>
    </footer>
  );
};
