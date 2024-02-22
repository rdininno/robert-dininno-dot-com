export default function AlbumButton({ direction = "right", onClick }) {
  return (
    <button className={`album-button ${direction}`} onClick={onClick}>
      {direction === "up" && "↑"}
      {direction === "right" && "→"}
      {direction === "down" && "↓"}
      {direction === "left" && "←"}
    </button>
  );
}
