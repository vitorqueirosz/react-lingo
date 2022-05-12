import { Boy, Man, Woman, WomanSmile } from '@/assets/images';

export const lessons = {
  en: {
    beginner: {
      steps: [
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
          title: 'Escreva isso em portugues',
          image: () => <Woman />,
          words: ['woman', 'boy', 'I', 'A', 'man'],
          sentence: {
            language: 'pt',
            value: 'Um homem',
          },
          answer: 'a man',
        },

        {
          type: 'listening',
          title: 'Selecione o que voce ouve',
          words: ['Sou', 'pao', 'eu', 'fico', 'menino', 'um', 'ficas'],
          answer: 'sou um menino',
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
