import { IcSlowSound, IcSound } from '@/assets/icons';
import {
  Boy,
  Fireman,
  Man,
  ManSmile,
  Police,
  SecurityMan,
  Woman,
  WomanSmile,
} from '@/assets/images';

export const lessons = {
  en: {
    beginner: {
      steps: [
        {
          type: 'listening',
          title: 'Selecione o que você ouve',
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
          title: 'Escreva isso em inglês',
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
          title: 'Selecione o que você ouve',
          words: ['have', 'how', 'do', 'doing', 'a', 'are', 'for', 'you'],
          answer: 'how are you doing',
          sentence: {
            language: 'en',
            value: 'how are you doing',
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
          title: 'Qual desses é o “bombeiro”?',
          images: [
            {
              image: () => <Police />,
              title: 'the cop',
            },
            {
              image: () => <Fireman />,
              title: 'the fireman',
            },
            {
              image: () => <SecurityMan />,
              title: 'the security man',
            },
          ],
          answer: 'the fireman',
        },
        {
          type: 'sentence',
          title: 'Escreva isso em inglês',
          image: () => <ManSmile />,
          words: ['woman', 'her', 'is', 'A', 'son', 'soon', 'pretty'],
          sentence: {
            language: 'pt',
            value: 'O filho dela é bonito',
          },
          answer: 'her son is pretty',
        },
        {
          type: 'matchWords',
          title: 'Selecione os pares combinados',
          words: [
            {
              language: 'pt',
              values: [
                {
                  value: 'faca',
                  ref: 'knife',
                },
                {
                  value: 'garfo',
                  ref: 'fork',
                },
                {
                  value: 'spoon',
                  ref: 'colher',
                },
                {
                  value: 'panela',
                  ref: 'pan',
                },
                {
                  value: 'sabão',
                  ref: 'soap',
                },
              ],
            },
            {
              language: 'en',
              values: [
                {
                  value: 'spoon',
                  ref: 'colher',
                },
                {
                  value: 'soap',
                  ref: 'sabão',
                },
                {
                  value: 'knife',
                  ref: 'faca',
                },
                {
                  value: 'pan',
                  ref: 'panela',
                },
                {
                  value: 'fork',
                  ref: 'garfo',
                },
              ],
            },
          ],
        },
      ],
    },
    advanced: {
      steps: [
        {
          type: 'listening',
          title: 'Selecione o que você ouve',
          words: [
            'his',
            'he',
            'down',
            'star',
            'fall',
            'form',
            'fell',
            'from',
            'stairs',
            'the',
          ],
          answer: 'he fell from the stairs',
          sentence: {
            language: 'en',
            value: 'he fell from the stairs',
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
          type: 'sentence',
          title: 'Escreva isso em inglês',
          image: () => <Woman />,
          words: [
            'wallet',
            'he',
            'wanted',
            'his',
            'its',
            'wants',
            'wall',
            'back',
          ],
          sentence: {
            language: 'pt',
            value: 'Ele quer a carteira dele de volta',
          },
          answer: 'he wants his wallet back',
        },
        {
          type: 'sentence',
          title: 'Escreva isso em inglês',
          image: () => <Woman />,
          words: [
            'too',
            'pink',
            'purple',
            'her',
            'much',
            'more',
            'is',
            'its',
            'too',
            'she',
            'wearing',
          ],
          sentence: {
            language: 'pt',
            value: 'Ela esta vestindo muito roxo',
          },
          answer: 'she is wearing too much purple',
        },
        {
          type: 'matchWords',
          title: 'Selecione os pares combinados',
          words: [
            {
              language: 'pt',
              values: [
                {
                  value: 'peso',
                  ref: 'weight',
                },
                {
                  value: 'árvore',
                  ref: 'tree',
                },
                {
                  value: 'anilha',
                  ref: 'washer',
                },
                {
                  value: 'teto',
                  ref: 'ceiling',
                },
                {
                  value: 'prancha',
                  ref: 'planking',
                },
              ],
            },
            {
              language: 'en',
              values: [
                {
                  value: 'tree',
                  ref: 'árvore',
                },
                {
                  value: 'planking',
                  ref: 'prancha',
                },
                {
                  value: 'ceiling',
                  ref: 'teto',
                },
                {
                  value: 'weight',
                  ref: 'peso',
                },
                {
                  value: 'washer',
                  ref: 'anilha',
                },
              ],
            },
          ],
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
