import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

import { Mascot } from '@/assets/images';
import { useLessons } from '@/contexts';
import { Button, Icon } from '@/components';
import { PATHS } from '@/constants/paths';
import { useNavigate } from 'react-router-dom';

export const Result = () => {
  const [isConfettiShowing, setIsConfettiShowing] = useState(false);
  const { answersAmount, handleResetAnswersAmount } = useLessons();
  const navigate = useNavigate();

  useEffect(() => {
    const { corrects, wrongs } = answersAmount;
    const hasSuccess = corrects > wrongs;

    setIsConfettiShowing(hasSuccess);
  }, [answersAmount]);

  useEffect(() => {
    if (isConfettiShowing) {
      setTimeout(() => {
        setIsConfettiShowing(false);
      }, 7000);
    }
  }, [isConfettiShowing]);

  const handleResetGame = () => {
    handleResetAnswersAmount();
    navigate(PATHS.HOME);
  };

  return (
    <div className="flex justify-center items-center h-screen w-full flex-col">
      <div className="relative w-60 flex justify-center items-center">
        <h3 className="text-5xl font-bold text-gray-700">Result</h3>
        <Mascot className="absolute w-24 h-40 -right-6 -top-20" />
      </div>

      <div className="flex flex-col justify-center items-center mt-16 bg-slate-400 rounded-md w-96 h-40 p-2">
        <div className="flex items-center w-full justify-between">
          <h3 className="text-2xl font-bold text-slate-50">Corrects:</h3>

          <span className="flex items-center font-bold text-xl text-neutral-50">
            {answersAmount.corrects} <Icon icon="IcCheck" />
          </span>
        </div>

        <div className="flex items-center w-full justify-between">
          <h3 className="text-2xl font-bold text-slate-50">Wrongs:</h3>

          <span className="flex items-center font-bold text-xl text-neutral-50">
            {answersAmount.wrongs} <Icon icon="IcBorderClose" />
          </span>
        </div>
      </div>

      {isConfettiShowing && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <div className="flex mt-8">
        <Button icon="IcReload" onClick={handleResetGame}>
          Play again
        </Button>
      </div>
    </div>
  );
};
