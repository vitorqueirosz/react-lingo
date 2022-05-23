import { useState } from 'react';

import { Card } from './components/Card';
import { Anchor, Button } from '@/components';
import { Mascot } from '@/assets/images/';
import { setUrlWithParams } from '@/utils/url';
import { PATHS } from '@/constants/paths';

export type Language = 'en' | 'es';

export type Level = 'beginner' | 'medium' | 'advanced';

const cardStyle =
  ' absolute bottom-0 translate-x-full opacity-0 transition-all ease-in-out duration-300 ';

export const Home = () => {
  const [language, setLanguage] = useState('');

  const handleSelectedLanguage = (language: Language | '') => {
    setLanguage(language);
  };

  const handleUrlNavigation = (level: Level) => {
    return setUrlWithParams(PATHS.LESSONS, { language, level });
  };

  return (
    <div className="bg-gray-100 flex h-screen w-full overflow-x-hidden flex-col items-center ">
      <div className="relative flex gap-4 mt-40 flex-wrap justify-center">
        <h1 className="text-5xl font-bold text-gray-700 lg:text-6xl">
          Welcome to
        </h1>
        <h1 className="text-5xl font-bold text-green-500 lg:text-6xl">
          React-Lingo
        </h1>

        <Mascot className="absolute w-20 h-40 right-2 -top-20 sm:-right-14" />
      </div>

      <main className="relative flex justify-center">
        <Card title="Choose your language">
          <Button onClick={() => handleSelectedLanguage('en')}>English</Button>
          <Button onClick={() => handleSelectedLanguage('es')}>Spanish</Button>
        </Card>

        <Card
          title="Choose your level"
          style={language ? cardStyle + 'translate-x-0 opacity-100' : cardStyle}
          handleSelectedLanguage={() => handleSelectedLanguage('')}
          hasIcon
        >
          <Anchor href={handleUrlNavigation('beginner')}>Beginner</Anchor>
          <Anchor href={handleUrlNavigation('medium')}>Medium</Anchor>
          <Anchor href={handleUrlNavigation('advanced')}>Advanced</Anchor>
        </Card>
      </main>
    </div>
  );
};
