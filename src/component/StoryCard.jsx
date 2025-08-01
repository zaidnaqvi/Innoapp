import { useState } from "react";
import { FaHeart } from "react-icons/fa";

function InstagramLikeButton({ initialCount = 0 }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(initialCount);
  const [animating, setAnimating] = useState(false);

  function handleClick() {
    setLiked((prev) => {
      const newLiked = !prev;
      setCount((c) => (newLiked ? c + 1 : c - 1));
      if (newLiked) setAnimating(true);
      return newLiked;
    });
  }

  function handleAnimationEnd() {
    setAnimating(false);
  }

  // Format numbers to K format for thousands (optional)
  function formatCount(num) {
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  }

  return (
    <button
      onClick={handleClick}
      aria-pressed={liked}
      aria-label={liked ? "Unlike" : "Like"}
      onAnimationEnd={handleAnimationEnd}
      className="flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-pink-500"
      type="button"
    >
      <FaHeart
        className={`${
          liked ? "text-pink-600" : "text-gray-400"
        } transition-colors duration-300 ${animating ? "animate-pop" : ""}`}
        size={20}
        aria-hidden="true"
      />
      <span className="text-sm select-none text-gray-800 font-semibold">
        {formatCount(count)}
      </span>
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

export default function StoryCard({ story }) {
  // Assume you have a 'likes' field or use story.reactions.metoo or similar
  const initialLikes = story.likes !== undefined ? story.likes : 0;

  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-purple-700">
          {story.category}
        </span>
        <span className="text-xs text-gray-500">
          {new Date(story.date).toLocaleDateString()}
        </span>
      </div>
      <p className="mb-3 text-gray-800">{story.text}</p>
      {story.learned && (
        <p className="italic text-gray-600">Lesson Learned: {story.learned}</p>
      )}

      {/* Reaction area */}
      <div className="mt-3 flex justify-end">
        <InstagramLikeButton initialCount={initialLikes} />
      </div>
    </div>
  );
}
