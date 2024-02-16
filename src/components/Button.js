export default function Button({ text, radius, onClick }) {
  const style = {
    borderRadius: radius,
  };
  return (
    <button className="button" style={style} onClick={onClick}>
      {text}
    </button>
  );
}
