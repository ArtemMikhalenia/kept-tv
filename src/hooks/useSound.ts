import { useCallback, useEffect, useRef } from 'react';

export const useSound = (soundSrc: string, volume: number) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(soundSrc);
    audioRef.current.preload = 'auto';

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [soundSrc]);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.volume = volume;
      audio.play().catch((e) => console.error('Audio play failed:', e));
    }
  }, []);

  return { play };
};
