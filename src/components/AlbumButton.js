import { useState } from "react";

export default function AlbumButton({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`album-button ${isOpen ? "open" : "closed"}`}
      onClick={handleClick}
    >
      {isOpen ? "×" : "+"}
    </button>
  );
}
