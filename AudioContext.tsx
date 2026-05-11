"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { AudioContextType } from "@/types";

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMuted, setIsMutedState] = useState(true); // Default muted for privacy/safety
  const [volume, setVolumeState] = useState(0.5);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Restore preferences from localStorage
    const savedMuted = localStorage.getItem("audio-muted");
    const savedVolume = localStorage.getItem("audio-volume");

    if (savedMuted !== null) {
      setIsMutedState(JSON.parse(savedMuted));
    }
    if (savedVolume !== null) {
      setVolumeState(parseFloat(savedVolume));
    }
  }, []);

  const toggleMute = () => {
    setIsMutedState((prev) => {
      const newState = !prev;
      localStorage.setItem("audio-muted", JSON.stringify(newState));
      return newState;
    });
  };

  const setVolume = (vol: number) => {
    const clampedVol = Math.max(0, Math.min(1, vol));
    setVolumeState(clampedVol);
    localStorage.setItem("audio-volume", JSON.stringify(clampedVol));
  };

  const playSound = (soundPath: string) => {
    if (isMuted || typeof window === "undefined") return;

    try {
      const audio = new Audio(soundPath);
      audio.volume = volume;
      audio.play().catch(() => {
        // Silently fail if audio can't play
      });
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <AudioContext.Provider value={{ isMuted, volume, toggleMute, setVolume, playSound }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return context;
};
