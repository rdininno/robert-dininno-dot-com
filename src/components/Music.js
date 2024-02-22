import ArrowButton from "./ArrowButton";
import Album from "./Album";

export default function Music({ onMenuSelect }) {
  return (
    <div className="music-page">
      <div className="back-button">
        <ArrowButton direction="up" onClick={() => onMenuSelect("Art")} />
      </div>
      <div>
        <div className="music-content">
          <Album
            albumName="Soul Vibes"
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
