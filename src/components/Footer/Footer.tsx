import { useLessons } from '@/contexts';
import { Button } from '@/components';
import { IcBorderClose, IcCheck } from '@/assets/icons';

type FooterProps = {
  handleCheckAnswer: () => void;
  disabled: boolean;
  isCorrectAnswer: boolean | null;
  answer?: string;
  hasAnswer: boolean;
};

type FooterResultProps = Pick<FooterProps, 'isCorrectAnswer' | 'answer'>;

type ResultValues = Record<
  string,
  {
    title: string;
    style: string;
    icon: () => JSX.Element;
  }
>;

const values: ResultValues = {
  true: {
    style: 'text-green-700',
    title: 'Nice job!',
    icon: () => <IcCheck className="w-full h-full" />,
  },
  false: {
    style: 'text-red-700',
    title: 'Correct solution:',
    icon: () => <IcBorderClose className="w-16 h-16" />,
  },
};

const FooterResult = ({ isCorrectAnswer, answer }: FooterResultProps) => {
  const currentValue = values[String(isCorrectAnswer)];

  return (
    <div className="flex">
      <div className="flex items-center justify-center rounded-3xl w-18 h-16 mr-4">
        {currentValue.icon()}
      </div>
      <div>
        <h3 className={'font-bold text-2xl ' + currentValue.style}>
          {currentValue.title}
        </h3>
        {!isCorrectAnswer && <span className="text-red-700">{answer}</span>}
      </div>
    </div>
  );
};

export const Footer = ({
  handleCheckAnswer,
  disabled,
  isCorrectAnswer,
  answer,
  hasAnswer,
}: FooterProps) => {
  const { handleNextStep } = useLessons();

  const stateStyle =
    hasAnswer &&
    (isCorrectAnswer ? 'bg-green-200 border-none' : 'bg-red-200 border-none');

  const handleButtonAction = hasAnswer ? handleNextStep : handleCheckAnswer;

  return (
    <footer
      className={'border-t-2 border-neutral-200 h-36 w-full ' + stateStyle}
    >
      <div className="flex m-auto justify-between items-center h-full w-full max-w-3xl">
        {hasAnswer ? (
          <FooterResult isCorrectAnswer={isCorrectAnswer} answer={answer} />
        ) : (
          <Button
            color="secondary"
            size="large"
            upperCase
            onClick={handleNextStep}
          >
            Skip
          </Button>
        )}

        <Button
          size="large"
          upperCase
          onClick={handleButtonAction}
          disabled={disabled}
          hasError={hasAnswer && !isCorrectAnswer}
        >
          {hasAnswer ? 'Continue' : 'Check'}
        </Button>
      </div>
    </footer>
  );
};
