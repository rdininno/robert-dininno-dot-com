import React, { useState } from "react";
import AlbumButton from "./AlbumButton";
import AudioPlayer from "./AudioPlayer";

export default function Album({ albumName, tracks }) {
  const [isAlbumListVisible, setIsAlbumListVisible] = useState(false);

  const toggleAlbumListVisibility = () => {
    setIsAlbumListVisible(!isAlbumListVisible);
  };

  return (
    <div className="album">
      <div className="album-header">
        <AlbumButton
          direction={isAlbumListVisible ? "down" : "right"}
          onClick={toggleAlbumListVisibility}
        />
        <h2 className="album-name">{albumName}</h2>
      </div>
      {isAlbumListVisible && (
        <div className="album-list">
          {tracks.map((track, index) => (
            <AudioPlayer key={index} src={track.src} title={track.title} />
          ))}
        </div>
      )}
    </div>
  );
}
