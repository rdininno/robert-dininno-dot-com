import Button from "./Button";

export default function MainPage({ onMenuSelect }) {
  return (
    <div className="main-page">
      {/* <div className="menu"></div> */}

      <header className="header">
        <h1>Robert Di Ninno</h1>
        <div className="description">
          <p>Full stack developer with a passion for the front end.</p>
        </div>
      </header>

      <div className="menu">
        <Button text="Employment" onClick={() => onMenuSelect("Employment")} />
        <Button text="Art" radius="50px" onClick={() => onMenuSelect("Art")} />
        <Button text="Portfolio" radius="50px 5px 50px 5px" />
        <Button text="About" onClick={() => onMenuSelect("About")} />
      </div>
    </div>
  );
}
