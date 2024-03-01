import ArrowButton from "./ArrowButton";
import Album from "./Album";
import MusicMenuButton from "./MusicMenuButton.js";
import AlbumsRecorded from "./AlbumsRecorded.js";
import AlbumPlayed from "./AlbumsPlayed.js";

export default function Music({ onMenuSelect }) {
  return (
    <div className="music-page">
      <header className="music-header">
        <div className="back-button">
          <ArrowButton direction="up" onClick={() => onMenuSelect("Art")} />
        </div>
        <div className="music-page-title">
          <h1>Audio</h1>
        </div>
      </header>

      <div className="music-page-menu">
        <MusicMenuButton
          label="Albums I've Made"
          scrollToClass=".music-content"
        />
        <MusicMenuButton
          label="Albums I've Recorded"
          scrollToClass=".albums-recorded"
        />
        <MusicMenuButton
          label="Albums I've Played On"
          scrollToClass=".albums-played-on"
        />
      </div>

      <Album />

      <AlbumsRecorded />

      <AlbumPlayed />
    </div>
  );
}
