export default function MenuButton({ label, scrollToClass }) {
  return (
    <button
      className="music-page-menu-button"
      onClick={() =>
        document.querySelector(scrollToClass).scrollIntoView({
          behavior: "smooth",
        })
      }
    >
      {label}
    </button>
  );
}
