import ArrowButton from "./ArrowButton";
import Album from "./Album";

export default function Music({ onMenuSelect }) {
  return (
    <div className="music-page">
      <header className="music-header">
        <div className="back-button">
          <ArrowButton direction="up" onClick={() => onMenuSelect("Art")} />
        </div>
        <div className="music-page-title">
          <h1>Albums</h1>
        </div>
      </header>
      <div>
        <div className="music-content">
          <Album
            albumName="Soul Vibes"
            tracks={[
              { src: "/audio/Festivals_OneMin.mp3", title: "Festivals" },
              { src: "/audio/Festivals_OneMin.mp3", title: "Soul Vibes 1" },
            ]}
          />

          <Album
            albumName="Beat n Soul"
            tracks={[
              { src: "/audio/Festivals_OneMin.mp3", title: "Festivals" },
              { src: "/audio/Festivals_OneMin.mp3", title: "Soul Vibes 1" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
