import { IcBorderClose, IcCheck } from '@/assets/icons';
import { Mascot } from '@/assets/images';
import { useLessons } from '@/contexts';

export const Result = () => {
  const { answersAmount } = useLessons();

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
            {answersAmount.corrects} <IcCheck className="w-11 h-10" />
          </span>
        </div>

        <div className="flex items-center w-full justify-between">
          <h3 className="text-2xl font-bold text-slate-50">Wrongs:</h3>

          <span className="flex items-center font-bold text-xl text-neutral-50">
            {answersAmount.wrongs} <IcBorderClose className="w-11 h-10" />
          </span>
        </div>
      </div>
    </div>
  );
};
