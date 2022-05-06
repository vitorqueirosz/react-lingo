import { Anchor } from '@/components';
import { Mascot } from '@/assets/images/';

type Language = 'en' | 'pt';

const ROUTES = {
  lesson: (language: Language) => `/lessons/${language}`,
};

export const Home = () => {
  return (
    <div className="bg-gray-100 flex h-screen w-full flex-col items-center ">
      <div className="relative flex gap-4 mt-40">
        <h1 className="text-6xl font-bold text-gray-700">Welcome to</h1>
        <h1 className="text-6xl font-bold text-green-500">React-Lingo</h1>

        <Mascot className="absolute w-24 h-40 left-full bottom-0" />
      </div>

      <main className="flex flex-col items-center mt-16">
        <h3 className="text-3xl font-bold text-gray-600">
          Choose your language
        </h3>

        <div className="flex mt-4 gap-2">
          <Anchor href={ROUTES.lesson('en')}>English</Anchor>
          <Anchor href={ROUTES.lesson('pt')}>Portuguese</Anchor>
        </div>
      </main>
    </div>
  );
};
