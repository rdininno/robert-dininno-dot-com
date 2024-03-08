import {
  ArrowUpIcon,
  ArrowRightIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export default function ArrowButton({ direction = "right", onClick }) {
  const renderIcon = () => {
    switch (direction) {
      case "up":
        return <ArrowUpIcon />;
      case "right":
        return <ArrowRightIcon />;
      case "down":
        return <ArrowDownIcon />;
      case "left":
        return <ArrowLeftIcon />;
      default:
        return null;
    }
  };

  return (
    <button className={`arrowButton ${direction}`} onClick={onClick}>
      {renderIcon()}
    </button>
  );
}
