import { useState } from 'react';

export default function ReactionButtons() {
  const [reactions, setReactions] = useState({
    metoo: 0,
    hug: 0,
    notalone: 0,
  });

  function handleReact(type) {
    setReactions(prev => ({ ...prev, [type]: prev[type] + 1 }));
  }

  return (
    <div className="flex space-x-4 mt-2">
      <button onClick={() => handleReact("metoo")} className="bg-purple-100 hover:bg-purple-200 rounded px-3 py-1 text-purple-800">
        Me too 🤝 {reactions.metoo}
      </button>
      <button onClick={() => handleReact("hug")} className="bg-purple-100 hover:bg-purple-200 rounded px-3 py-1 text-purple-800">
        Hug 🤗 {reactions.hug}
      </button>
      <button onClick={() => handleReact("notalone")} className="bg-purple-100 hover:bg-purple-200 rounded px-3 py-1 text-purple-800">
        You're not alone 💜 {reactions.notalone}
      </button>
    </div>
  );
}
