export default function ArrowButton({ direction = "right" }) {
  return (
    <button className={`arrowButton ${direction}`}>
      {direction === "up" && "↑"}
      {direction === "right" && "→"}
      {direction === "down" && "↓"}
      {direction === "left" && "←"}
    </button>
  );
}
