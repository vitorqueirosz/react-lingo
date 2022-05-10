import { Language } from '@/pages';

const languageKey = {
  pt: 'pt-BR',
  en: 'en-US',
};

export const setVoiceByLanguage = (language: Language) => {
  const speech = new SpeechSynthesisUtterance();
  const voices = window.speechSynthesis.getVoices();

  const [voiceByLanguage] = voices.filter(
    (voice) => voice.lang === languageKey[language],
  );

  speech.voice = voiceByLanguage;

  return speech;
};

export const setSpeech = (language: Language, text: string) => {
  const speech = setVoiceByLanguage(language);
  speech.text = text;

  window.speechSynthesis.speak(speech);
};
