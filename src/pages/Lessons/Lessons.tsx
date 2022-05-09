import { IcClose } from '@/assets/icons';
import { useLocation } from 'react-router-dom';
import { Language, Level } from '@/pages';
import { lessons } from './data/lessons';
import { Sentence, SentenceProps } from './components';

type LessonType = 'listening' | 'sentence' | 'images' | 'completeWord';

type Element = <T>(props: T) => JSX.Element;

const renders: Record<LessonType, Element> = {
  listening: () => <div className="bg-gray-300 w-6/12 h-4"></div>,
  sentence: (props: unknown) => <Sentence {...(props as SentenceProps)} />,
  images: () => <div className="bg-gray-300 w-6/12 h-4"></div>,
  completeWord: () => <div className="bg-gray-300 w-6/12 h-4"></div>,
};

export const Lessons = () => {
  const params = useLocation();

  const [language, level] = ['language', 'level'].map((key) =>
    new URLSearchParams(params.search).get(key),
  ) as [Language, Level];

  const steps = lessons[language][level].steps;
  const step = steps[0];

  const Lesson = renders[step.type as LessonType](step);

  return (
    <div className="flex justify-center items-center flex-col pt-12 w-full">
      <div className="flex items-center w-full justify-center">
        <button className="mr-2" type="button">
          <IcClose />
        </button>

        <div className="relative w-6/12 flex items-center justify-center">
          <div className="relative bg-gray-300 h-4 w-full rounded-md" />
          <div
            className="absolute bg-green-500 h-4 w-full rounded-md left-0 transition-all ease-in-out duration-300"
            style={{ width: '20%' }}
          />
        </div>
      </div>

      {Lesson}
    </div>
  );
};
