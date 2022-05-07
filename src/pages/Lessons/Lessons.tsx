import { IcClose } from '@/assets/icons';

const renders = {
  listening: () => <div className="bg-gray-300 w-6/12 h-4"></div>,
  words: () => <div className="bg-gray-300 w-6/12 h-4"></div>,
  images: () => <div className="bg-gray-300 w-6/12 h-4"></div>,
  completeWord: () => <div className="bg-gray-300 w-6/12 h-4"></div>,
};

const lessons = {
  beginner: {
    steps: [
      {
        type: 'listening',
        title: 'Listening',
        words: [],
        sentence: 'List',
      },
    ],
  },
  medium: {
    steps: [
      {
        type: 'listening',
        title: 'Listening',
        words: [],
        sentence: 'List',
      },
    ],
  },
  advanced: {
    steps: [
      {
        type: 'listening',
        title: 'Listening',
        words: [],
        sentence: 'List',
      },
    ],
  },
};

export const Lessons = () => {
  console.log(lessons);

  const Element = renders['listening'];

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

      <Element />
    </div>
  );
};
