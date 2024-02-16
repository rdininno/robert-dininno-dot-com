export default function ArrowButton({ direction = "right", onClick }) {
  return (
    <button className={`arrowButton ${direction}`} onClick={onClick}>
      {direction === "up" && "↑"}
      {direction === "right" && "→"}
      {direction === "down" && "↓"}
      {direction === "left" && "←"}
    </button>
  );
}
