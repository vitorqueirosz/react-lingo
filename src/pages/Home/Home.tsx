import { Button } from '@/components';

export const Home = () => {
  return (
    <div className="bg-gray-100 flex h-screen w-full flex-col items-center ">
      <div className="flex gap-4 mt-40">
        <h1 className="text-6xl font-bold text-gray-700">Welcome to</h1>
        <h1 className="text-6xl font-bold text-green-500">React-Lingo</h1>
      </div>

      <main className="flex flex-col items-center mt-16">
        <h3 className="text-3xl font-bold text-gray-700">
          Choose your language
        </h3>

        <div className="flex mt-4 gap-2">
          <Button>English</Button>
          <Button>Portuguese</Button>
        </div>
      </main>
    </div>
  );
};
