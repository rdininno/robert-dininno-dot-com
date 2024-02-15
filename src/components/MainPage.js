import ArrowButton from "./ArrowButton";
import Button from "./Button";

export default function MainPage() {
  return (
    <div className="main-page">
      <header className="header">
        <h1>Robert Di Ninno</h1>
      </header>
      <div className="main-page-content">
        <div className="description">
          Full stack developer with a focus on the front end. Write a longer
          description here.
        </div>
        <div>
          <ArrowButton direction="down" />
          <Button text="Employment" />
        </div>
      </div>
    </div>
  );
}
