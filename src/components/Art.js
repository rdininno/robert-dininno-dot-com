import ArrowButton from "./ArrowButton";

export default function Art({ onMenuSelect }) {
  return (
    <div className="art-page">
      <div className="back-button">
        <ArrowButton direction="up" onClick={() => onMenuSelect("MainPage")} />
      </div>
      <div>
        <div className="art-content">
          <div className="art-button-wrapper">
            <button
              className="art-page-button"
              onClick={() => onMenuSelect("Music")}
            >
              Audio
            </button>
          </div>
          <div className="art-button-wrapper">
            <button
              className="art-page-button"
              onClick={() => onMenuSelect("Visual")}
            >
              Visual
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
