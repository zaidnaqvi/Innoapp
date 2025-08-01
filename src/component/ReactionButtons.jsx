import { useState } from "react";
import { FaHeart } from "react-icons/fa";

function InstagramLikeButton({ initialCount = 0, onToggle }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(initialCount);
  const [animating, setAnimating] = useState(false);

  function handleClick() {
    setLiked((prev) => {
      const newLiked = !prev;
      setCount((c) => (newLiked ? c + 1 : c - 1));
      if (newLiked) setAnimating(true);
      if (onToggle) onToggle(newLiked);
      return newLiked;
    });
  }

  // Reset animation flag after animation finishes
  function handleAnimationEnd() {
    setAnimating(false);
  }

  // Format count e.g. 1200 -> 1.2K
  function formatCount(num) {
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  }

  return (
    <button
      onClick={handleClick}
      aria-pressed={liked}
      aria-label={liked ? "Unlike post" : "Like post"}
      onAnimationEnd={handleAnimationEnd}
      className={`flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-pink-500`}
      type="button"
    >
      <FaHeart
        className={`${
          liked ? "text-pink-600" : "text-gray-400"
        } transition-colors duration-300 ${
          animating ? "animate-pop" : ""
        }`}
        size={24}
        aria-hidden="true"
      />
      <span className="font-semibold select-none text-gray-800">{formatCount(count)}</span>
      <style>{`
        @keyframes pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.4); }
          100% { transform: scale(1); }
        }
        .animate-pop {
          animation: pop 300ms ease-in-out;
        }
      `}</style>
    </button>
  );
}
