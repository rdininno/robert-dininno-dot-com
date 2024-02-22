import ArrowButton from "./ArrowButton";

export default function Visual({ onMenuSelect }) {
  return (
    <div className="visual-page">
      <div className="back-button">
        <ArrowButton direction="up" onClick={() => onMenuSelect("Art")} />
      </div>
      <div>
        <div className="visual-content">on the way</div>
      </div>
    </div>
  );
}
