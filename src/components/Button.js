export default function Button({ text, radius }) {
  const style = {
    borderRadius: radius,
  };
  return (
    <button className="button" style={style}>
      {text}
    </button>
  );
}
