import ArrowButton from "./ArrowButton";
import AudioPlayer from "./AudioPlayer";

export default function Art({ onMenuSelect }) {
  return (
    <div className="art-page">
      <div className="art-content">
        <div className="back-button">
          <ArrowButton
            direction="up"
            onClick={() => onMenuSelect("MainPage")}
          />

          <div>
            <AudioPlayer src="/audio/Festivals_OneMin.mp3" title="festivals" />
          </div>
        </div>
      </div>
    </div>
  );
}
