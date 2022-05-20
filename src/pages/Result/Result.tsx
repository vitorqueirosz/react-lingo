import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

import { Mascot } from '@/assets/images';
import { useLessons } from '@/contexts';
import { Anchor } from '@/components';
import { Icon } from '@/components/Icon/Icon';
import { PATHS } from '@/constants/paths';

export const Result = () => {
  const [isConfettiShowing, setIsConfettiShowing] = useState(false);
  const { answersAmount } = useLessons();

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
        <Anchor icon="IcReload" href={PATHS.HOME}>
          Play again
        </Anchor>
      </div>
    </div>
  );
};
