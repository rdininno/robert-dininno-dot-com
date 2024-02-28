import React, { useState, useEffect, useRef } from "react";
import AlbumButton from "./AlbumButton";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

export default function Album({ albumName, tracks }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAlbumListVisible, setIsAlbumListVisible] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio();
    return () => {
      audioRef.current.pause();
      audioRef.current.src = "";
    };
  }, []);

  const playTrack = (index) => {
    const isNewTrack = index !== currentTrackIndex;
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
  };

  const toggleAlbumListVisibility = () => {
    setIsAlbumListVisible(!isAlbumListVisible);

    if (isAlbumListVisible) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const handleTrackEnd = () => {
      let nextIndex = currentTrackIndex + 1;
      if (nextIndex < tracks.length) {
        playTrack(nextIndex);
      } else {
        setCurrentTrackIndex(null);
        setIsPlaying(false);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleTrackEnd);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleTrackEnd);
      }
    };
  }, [currentTrackIndex, tracks.length]);

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
