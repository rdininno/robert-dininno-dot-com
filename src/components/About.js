import ArrowButton from "./ArrowButton";

export default function About({ onMenuSelect }) {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="back-button">
          <ArrowButton
            direction="up"
            onClick={() => onMenuSelect("MainPage")}
          />
        </div>

        <h1>About</h1>
        <p className="email">Email: robertdininno@gmail.com</p>
        <p className="blurb">
          I'm an artist, developer, and musician. I acknowledge that I live and
          work on the unceded territories of the Lekwungen (Songhees) and WSÁNEĆ
          (Saanich) peoples. Known as Victoria, BC.
        </p>
      </div>

      <div className="skills-container">
        <p>JavaScript</p>
        <p>ReactJS</p>
        <p>HTML/CSS/Tailwind</p>
        <p>Ruby</p>
        <p>Pheonix LiveView</p>
        <p>Elixir</p>
        <p>Liquid</p>
        <p>VueJS</p>
      </div>
    </div>
  );
}
