import React, { useState, useEffect, useRef } from "react";
import AlbumButton from "./AlbumButton";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

export default function Album({ albumName, tracks }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAlbumListVisible, setIsAlbumListVisible] = useState(false);
  const audioRef = useRef(new Audio());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const playTrack = (index) => {
    const isNewTrack = index !== currentTrackIndex;
    if (audioRef.current) {
      if (isNewTrack) {
        audioRef.current.src = tracks[index].src;
        audioRef.current.play();
        setCurrentTrackIndex(index);
        setIsPlaying(true);
      } else {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  const toggleAlbumListVisibility = () => {
    setIsAlbumListVisible(!isAlbumListVisible);
    if (isAlbumListVisible) {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    const handleTrackEnd = () => {
      const nextIndex =
        currentTrackIndex + 1 < tracks.length ? currentTrackIndex + 1 : null;
      if (nextIndex !== null) {
        playTrack(nextIndex);
      } else {
        setCurrentTrackIndex(null);
        setIsPlaying(false);
      }
    };

    audio.addEventListener("ended", handleTrackEnd);
    return () => {
      audio.removeEventListener("ended", handleTrackEnd);
    };
  }, [currentTrackIndex, playTrack, tracks.length]);

  return (
    <div className="album">
      <div className="album-header">
        <AlbumButton onClick={toggleAlbumListVisibility} />
        <h2 className="album-name">{albumName}</h2>
      </div>
      {isAlbumListVisible && (
        <div className="album-list">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`track ${
                index === currentTrackIndex ? "is-playing" : ""
              }`}
            >
              <button className="audio-button" onClick={() => playTrack(index)}>
                {currentTrackIndex === index && isPlaying ? (
                  <PauseIcon className="play-pause-icon" />
                ) : (
                  <PlayIcon className="play-pause-icon" />
                )}
              </button>
              <span className="track-title">{track.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
