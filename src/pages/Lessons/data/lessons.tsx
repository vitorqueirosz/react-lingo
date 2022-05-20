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
  es: {
    beginner: {
      steps: [
        {
          type: 'listening',
          title: 'Selecione o que você ouve',
          words: ['tener', 'uno', 'beber', 'una', 'mujeres', 'mujer', 'hombre'],
          answer: 'una mujer',
          sentence: {
            language: 'es',
            value: 'una mujer',
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
              title: 'el hombre',
            },
            {
              image: () => <WomanSmile />,
              title: 'el mujer',
            },
            {
              image: () => <Boy />,
              title: 'el chico',
            },
          ],
          answer: 'el chico',
        },
        {
          type: 'sentence',
          title: 'Escreva isso em espanhol',
          image: () => <ManSmile />,
          words: ['mujer', 'chico', 'el', 'yo', 'una', 'hombre'],
          sentence: {
            language: 'pt',
            value: 'Um homem',
          },
          answer: 'el hombre',
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
                  ref: 'chico',
                },
                {
                  value: 'mulher',
                  ref: 'mujer',
                },
                {
                  value: 'uma',
                  ref: 'una',
                },
                {
                  value: 'eu',
                  ref: 'yo',
                },
                {
                  value: 'homem',
                  ref: 'hombre',
                },
              ],
            },
            {
              language: 'es',
              values: [
                {
                  value: 'mujer',
                  ref: 'mulher',
                },
                {
                  value: 'chico',
                  ref: 'menino',
                },
                {
                  value: 'yo',
                  ref: 'eu',
                },
                {
                  value: 'una',
                  ref: 'uma',
                },
                {
                  value: 'hombre',
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
          words: ['tener', 'cómo', 'uste', 'haciendo', 'va', 'ta', 'una', 'te'],
          answer: 'cómo te va',
          sentence: {
            language: 'en',
            value: 'cómo te va',
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
              image: () => <Fireman />,
              title: 'el bombero',
            },
            {
              image: () => <Police />,
              title: 'el policia',
            },
            {
              image: () => <SecurityMan />,
              title: 'el hombre de seguridad',
            },
          ],
          answer: 'el bombero',
        },
        {
          type: 'sentence',
          title: 'Escreva isso em inglês',
          image: () => <ManSmile />,
          words: [
            'mujer',
            'ella',
            'su',
            'es',
            'una',
            'hijo',
            'luego',
            'bonito',
          ],
          sentence: {
            language: 'pt',
            value: 'O filho dela é bonito',
          },
          answer: 'su hijo es bonito',
        },
        {
          type: 'matchWords',
          title: 'Selecione os pares combinados',
          words: [
            {
              language: 'pt',
              values: [
                {
                  value: 'colher',
                  ref: 'cuchara',
                },
                {
                  value: 'sabão',
                  ref: 'jabón',
                },
                {
                  value: 'faca',
                  ref: 'cara',
                },
                {
                  value: 'panela',
                  ref: 'sartén',
                },
                {
                  value: 'garfo',
                  ref: 'garfio',
                },
              ],
            },
            {
              language: 'es',
              values: [
                {
                  value: 'cara',
                  ref: 'faca',
                },
                {
                  value: 'garfio',
                  ref: 'garfo',
                },
                {
                  value: 'cuchara',
                  ref: 'colher',
                },
                {
                  value: 'sartén',
                  ref: 'panela',
                },
                {
                  value: 'jabón',
                  ref: 'sabão',
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
            'se',
            'él',
            'abajo',
            'estrella',
            'cayó',
            'de',
            'the',
            'from',
            'escaleras',
            'las',
          ],
          answer: 'se cayó de las escaleras',
          sentence: {
            language: 'es',
            value: 'se cayó de las escaleras',
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
          title: 'Escreva isso em espanhol',
          image: () => <Woman />,
          words: [
            'cartera',
            'él',
            'querida',
            'quiere',
            'its',
            'wants',
            'su',
            'recuperar',
          ],
          sentence: {
            language: 'pt',
            value: 'Ele quer a carteira dele de volta',
          },
          answer: 'quiere recuperar su cartera',
        },
        {
          type: 'sentence',
          title: 'Escreva isso em espanhol',
          image: () => <Woman />,
          words: [
            'too',
            'morada',
            'roxo',
            'Ella',
            'él',
            'more',
            'is',
            'its',
            'too',
            'demasiado',
            'lleva',
          ],
          sentence: {
            language: 'pt',
            value: 'Ela esta vestindo muito roxo',
          },
          answer: 'Ella lleva demasiado morada',
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
                  ref: 'peso',
                },
                {
                  value: 'árvore',
                  ref: 'árbol',
                },
                {
                  value: 'anilha',
                  ref: 'lavadora',
                },
                {
                  value: 'teto',
                  ref: 'techo',
                },
                {
                  value: 'prancha',
                  ref: 'tablaje',
                },
              ],
            },
            {
              language: 'en',
              values: [
                {
                  value: 'árbol',
                  ref: 'árvore',
                },
                {
                  value: 'tablaje',
                  ref: 'prancha',
                },
                {
                  value: 'techo',
                  ref: 'teto',
                },
                {
                  value: 'peso',
                  ref: 'peso',
                },
                {
                  value: 'lavadora',
                  ref: 'anilha',
                },
              ],
            },
          ],
        },
      ],
    },
  },
};
