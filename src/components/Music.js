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
          <h1>Audio</h1>
        </div>
      </header>

      <div className="music-page-menu">
        <button
          className="music-page-menu-button"
          onClick={() =>
            document.querySelector(".music-content").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Albums I've Made
        </button>
        <button className="music-page-menu-button">Albums I've Recorded</button>
        <button className="music-page-menu-button">
          Albums I've Played On
        </button>
      </div>

      <div className="music-content">
        <Album
          albumName="Soul Vibes"
          tracks={[
            { src: "/audio/intro.mp3", title: "Intro" },
            { src: "/audio/festivals.mp3", title: "Festivals" },
            { src: "/audio/aintrun.mp3", title: "Run" },
            { src: "/audio/mod.mp3", title: "Modded" },
            { src: "/audio/sonnyblue.mp3", title: "Soul Vibes" },
            { src: "/audio/street.mp3", title: "On the Block" },
            { src: "/audio/want.mp3", title: "Wanting" },
            { src: "/audio/how.mp3", title: "How" },
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

      <div className="albums-recorded"></div>
    </div>
  );
}
