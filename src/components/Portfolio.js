import ArrowButton from "./ArrowButton";

export default function Portfolio({ onMenuSelect }) {
  return (
    <div className="portfolio-page">
      <header className="header">
        <div className="back-button">
          <ArrowButton
            direction="up"
            onClick={() => onMenuSelect("MainPage")}
          />
        </div>
        <h1>Portfolio</h1>
      </header>

      <div className="portfolio-content">
        <p className="portfolio-write-up">
          Currently small but strong, and consists of this website.
        </p>
      </div>
    </div>
  );
}
