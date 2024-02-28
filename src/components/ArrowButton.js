import {
  ArrowUpIcon,
  ArrowRightIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export default function ArrowButton({ direction = "right", onClick }) {
  const iconProps = { className: "h-6 w-6", "aria-hidden": "true" };

  const renderIcon = () => {
    switch (direction) {
      case "up":
        return <ArrowUpIcon {...iconProps} />;
      case "right":
        return <ArrowRightIcon {...iconProps} />;
      case "down":
        return <ArrowDownIcon {...iconProps} />;
      case "left":
        return <ArrowLeftIcon {...iconProps} />;
      default:
        return null; // or a default icon
    }
  };

  return (
    <button className={`arrowButton ${direction}`} onClick={onClick}>
      {renderIcon()}
    </button>
  );
}
