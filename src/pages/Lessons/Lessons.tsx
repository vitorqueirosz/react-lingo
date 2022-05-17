import { useEffect, useState } from 'react';

import { IcClose } from '@/assets/icons';
import { Language, Level } from '@/pages';
import { lessons } from './data/lessons';
import {
  Sentence,
  SentenceProps,
  Image,
  ImageProps,
  Listening,
  ListeningProps,
  MatchWordsProps,
  MatchWords,
} from './components';
import { useLessons } from '@/contexts';
import { useParams } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/constants/paths';

type LessonType = 'listening' | 'sentence' | 'image' | 'matchWords';

type Element = <T>(props: T) => JSX.Element;

type Result = { language: Language; level: Level };

const renders: Record<LessonType, Element> = {
  listening: (props: unknown) => <Listening {...(props as ListeningProps)} />,
  sentence: (props: unknown) => <Sentence {...(props as SentenceProps)} />,
  image: (props: unknown) => <Image {...(props as ImageProps)} />,
  matchWords: (props: unknown) => (
    <MatchWords {...(props as MatchWordsProps)} />
  ),
};

const resultStep = 4;

export const Lessons = () => {
  const [lessonComponent, setLessonComponent] = useState(<></>);

  const { currentStep } = useLessons();
  const { language, level } = useParams(['language', 'level']) as Result;
  const navigate = useNavigate();

  const steps = lessons[language][level].steps;

  const stepsAmount = steps.length;
  const percent = (currentStep / stepsAmount) * 100;

  useEffect(() => {
    if (currentStep === resultStep) return navigate(PATHS.RESULT);

    const step = steps[3];
    const lesson = renders[step.type as LessonType](step);

    setLessonComponent(lesson);
  }, [currentStep, navigate, steps]);

  return (
    <div className="flex flex-col h-screen justify-between items-center w-full">
      <div className="flex items-center flex-col pt-12 w-full flex-1 h-full">
        <div className="flex items-center w-full justify-center">
          <button className="mr-2" type="button">
            <IcClose />
          </button>

          <div className="relative w-7/12 flex items-center justify-center">
            <div className="relative bg-gray-300 h-4 w-full rounded-md" />
            <div
              className="absolute bg-green-500 h-4 w-full rounded-md left-0 transition-all ease-in-out duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {lessonComponent}
      </div>
    </div>
  );
};
