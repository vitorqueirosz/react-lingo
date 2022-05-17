import { Language } from '@/pages';
import { setSpeakByWord } from '@/utils/speech';
import { useEffect, useRef } from 'react';

export const useSetVoiceOnMount = (lang: Language, value?: string) => {
  const mounted = useRef(false);

  useEffect(() => {
    const handleSpeakSentenceOnlyOnce = () => {
      const voices = speechSynthesis.getVoices();

      if (voices.length && !mounted.current) {
        mounted.current = true;

        value && setSpeakByWord(lang, value);
      }
    };

    if ('voiceschanged' in window.speechSynthesis) {
      window.speechSynthesis.addEventListener(
        'voiceschanged',
        handleSpeakSentenceOnlyOnce,
      );
    } else {
      handleSpeakSentenceOnlyOnce();
    }

    return () => {
      if ('voiceschanged' in window.speechSynthesis) {
        window.speechSynthesis.removeEventListener(
          'voiceschanged',
          handleSpeakSentenceOnlyOnce,
        );
      }
    };
  }, [lang, value]);
};
