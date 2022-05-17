import { IcSlowSound, IcSound } from '@/assets/icons';
import { Boy, Man, Woman, WomanSmile } from '@/assets/images';

export const lessons = {
  en: {
    beginner: {
      steps: [
        {
          type: 'listening',
          title: 'Selecione o que voce ouve',
          words: ['have', 'one', 'drink', 'a', 'women', 'woman', 'man'],
          answer: 'a woman',
          sentence: {
            language: 'en',
            value: 'a woman',
          },
          images: [
            {
              image: () => <IcSound className="text-white h-10 w-28" />,
              speed: 1,
            },
            {
              image: () => <IcSlowSound />,
              speed: 0.5,
            },
          ],
        },
        {
          type: 'image',
          title: 'Qual desses é o “menino”?',
          images: [
            {
              image: () => <Man />,
              title: 'the man',
            },
            {
              image: () => <WomanSmile />,
              title: 'the woman',
            },
            {
              image: () => <Boy />,
              title: 'the boy',
            },
          ],
          answer: 'the boy',
        },
        {
          type: 'sentence',
          title: 'Escreva isso em ingles',
          image: () => <Woman />,
          words: ['woman', 'boy', 'I', 'A', 'man'],
          sentence: {
            language: 'pt',
            value: 'Um homem',
          },
          answer: 'a man',
        },
        {
          type: 'matchWords',
          title: 'Selecione os pares combinados',
          words: [
            {
              language: 'pt',
              values: [
                {
                  value: 'menino',
                  ref: 'boy',
                },
                {
                  value: 'mulher',
                  ref: 'woman',
                },
                {
                  value: 'uma',
                  ref: 'a',
                },
                {
                  value: 'eu',
                  ref: 'I',
                },
                {
                  value: 'homem',
                  ref: 'man',
                },
              ],
            },
            {
              language: 'en',
              values: [
                {
                  value: 'woman',
                  ref: 'mulher',
                },
                {
                  value: 'boy',
                  ref: 'menino',
                },
                {
                  value: 'I',
                  ref: 'eu',
                },
                {
                  value: 'a',
                  ref: 'uma',
                },
                {
                  value: 'man',
                  ref: 'homem',
                },
              ],
            },
          ],
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
  },
  pt: {
    beginner: {
      steps: [
        {
          type: 'listening',
          title: 'Write this in English',
          image: <Woman />,
          words: ['woman', 'boy', 'I', 'A', 'man'],
          sentence: 'Um homem',
        },
      ],
    },
    medium: {
      steps: [
        {
          type: 'listening',
          title: 'Write this in English',
          image: <Woman />,
          words: ['woman', 'boy', 'I', 'A', 'man'],
          sentence: 'Um homem',
        },
      ],
    },
    advanced: {
      steps: [
        {
          type: 'listening',
          title: 'Write this in English',
          image: <Woman />,
          words: ['woman', 'boy', 'I', 'A', 'man'],
          sentence: 'Um homem',
        },
      ],
    },
  },
};
