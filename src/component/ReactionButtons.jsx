import { useState } from "react";

export default function ReactionButtons({ initialReactions = { metoo: 0, hug: 0, notalone: 0 }, onReactionChange }) {
  const [reactions, setReactions] = useState(initialReactions);

  const [userReactions, setUserReactions] = useState({
    metoo: false,
    hug: false,
    notalone: false,
  });

  function handleReact(type) {
    setReactions(prev => {
      const increment = userReactions[type] ? -1 : 1;
      const updated = { ...prev, [type]: prev[type] + increment };

      if (onReactionChange) onReactionChange(type, !userReactions[type]);
      return updated;
    });

    setUserReactions(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
  }

  const buttonBaseClasses =
    "rounded px-3 py-1 transition-colors duration-200 font-semibold select-none flex items-center space-x-1";

  const reactionData = [
    { type: "metoo", label: "Me too 🤝" },
    { type: "hug", label: "Hug 🤗" },
    { type: "notalone", label: "You're not alone 💜" },
  ];

  return (
    <div className="flex space-x-4 mt-2">
      {reactionData.map(({ type, label }) => {
        const active = userReactions[type];
        return (
          <button
            key={type}
            onClick={() => handleReact(type)}
            aria-pressed={active}
            className={`${buttonBaseClasses} ${
              active
                ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg"
                : "bg-purple-100 text-purple-800 hover:bg-purple-200"
            }`}
          >
            <span>{label}</span>
            <span className="font-normal">{reactions[type]}</span>
          </button>
        );
      })}
    </div>
  );
}
