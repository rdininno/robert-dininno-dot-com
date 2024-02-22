import { useState, useRef } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

export default function AudioPlayer({ src, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(src));
  const { current: audio } = audioRef;

  audio.loop = false;

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (prevValue) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  return (
    <div className="audio-player">
      <button
        className="audio-button"
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <PauseIcon className="play-pause-icon" />
        ) : (
          <PlayIcon className="play-pause-icon" />
        )}
      </button>

      <div className="audio-name">{title}</div>
    </div>
  );
}
