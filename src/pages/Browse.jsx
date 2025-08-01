import { useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUser,
  FaListAlt,
  FaThumbsUp,
  FaHeart,
  FaHandsHelping,
} from "react-icons/fa";

// Category definitions with icons
const categories = [
  { label: "All", icon: <FaListAlt /> },
  { label: "Academic", icon: <FaGraduationCap /> },
  { label: "Personal", icon: <FaUser /> },
  { label: "Professional", icon: <FaBriefcase /> },
];

// Sample stories data with reaction counts
const sampleStories = [
  {
    id: 1,
    category: "Academic",
    text: "I failed an important exam and felt devastated.",
    learned: "Never underestimate consistent study.",
    date: "2025-07-10",
    reactions: { like: 15, love: 6, support: 4 },
  },
  {
    id: 2,
    category: "Professional",
    text: "My startup pitch was rejected multiple times.",
    learned: "Persistence is key to success.",
    date: "2025-06-20",
    reactions: { like: 25, love: 9, support: 7 },
  },
];

// Reaction types with icons and labels similar to social platforms
const reactionTypes = [
  { type: "like", label: "Like", icon: <FaThumbsUp /> },
  { type: "love", label: "Love", icon: <FaHeart /> },
  { type: "support", label: "Support", icon: <FaHandsHelping /> },
];

// Category icon component (for clean reuse)
const CategoryIcon = ({ category }) => {
  switch (category) {
    case "Academic":
      return <FaGraduationCap className="text-blue-600" aria-hidden="true" />;
    case "Professional":
      return <FaBriefcase className="text-green-600" aria-hidden="true" />;
    case "Personal":
      return <FaUser className="text-pink-600" aria-hidden="true" />;
    default:
      return <FaListAlt className="text-gray-400" aria-hidden="true" />;
  }
};

// Story card component resembling popular social feed card style
function StoryCard({ story, onReactionToggle }) {
  const [userReactions, setUserReactions] = useState({
    like: false,
    love: false,
    support: false,
  });

  // Toggle reaction locally and notify parent to update counts
  const toggleReaction = (type) => {
    const newState = !userReactions[type];
    setUserReactions((prev) => ({ ...prev, [type]: newState }));
    if (onReactionToggle) onReactionToggle(story.id, type, newState);
  };

  return (
    <article className="flex flex-col justify-between bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
      {/* Header with category and date */}
      <div className="flex items-center justify-between mb-4 text-gray-600 font-semibold text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <CategoryIcon category={story.category} />
          <span className="capitalize">{story.category}</span>
        </div>
        <time
          dateTime={story.date}
          title={`Shared on ${new Date(story.date).toLocaleDateString()}`}
          className="text-xs text-gray-400"
        >
          {new Date(story.date).toLocaleDateString()}
        </time>
      </div>

      {/* Story text and lesson */}
      <p className="text-gray-800 mb-4 text-sm sm:text-base">{story.text}</p>
      {story.learned && (
        <p className="italic text-gray-600 mb-6 pl-3 sm:pl-4 border-l-4 border-yellow-400 text-xs sm:text-sm">
          <span className="font-semibold">Lesson:</span> {story.learned}
        </p>
      )}

      {/* Reaction buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-4 justify-start items-center mt-4">
        {reactionTypes.map(({ type, label, icon }) => {
          const active = userReactions[type];
          return (
            <button
              key={type}
              type="button"
              aria-pressed={active}
              aria-label={`${active ? "Remove" : "Add"} ${label}`}
              className={`flex items-center gap-1 rounded-full px-4 py-1 text-sm font-semibold transition-colors select-none focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-yellow-400 ${
                active
                  ? "bg-yellow-400 text-white hover:bg-yellow-500"
                  : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
              }`}
              onClick={() => toggleReaction(type)}
            >
              <span className="text-base">{icon}</span>
              <span>{label}</span>
              <span className="text-xs font-normal ml-1">
                {story.reactions[type] + (active ? 1 : 0)}
              </span>
            </button>
          );
        })}
      </div>
    </article>
  );
}

export default function Browse() {
  const [filter, setFilter] = useState("All");
  const [stories, setStories] = useState(sampleStories);

  // Filter stories by selected category
  const filteredStories =
    filter === "All"
      ? stories
      : stories.filter((story) => story.category === filter);

  // Update reactions count on toggle reaction
  const handleReactionToggle = (storyId, type, reacted) => {
    setStories((prevStories) =>
      prevStories.map((story) => {
        if (story.id !== storyId) return story;
        const currentCount = story.reactions[type] || 0;
        return {
          ...story,
          reactions: {
            ...story.reactions,
            [type]: reacted ? currentCount + 1 : Math.max(0, currentCount - 1),
          },
        };
      })
    );
  };

  return (
    <>
      {/* Global CSS to hide scrollbar for horizontal overflow */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-12 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-extrabold text-center mb-16 tracking-tight text-gray-900">
          Browse Failure Stories
        </h1>

        {/* Category Filter Pills */}
        <nav
          aria-label="Story categories"
          className="flex flex-wrap sm:flex-nowrap justify-start sm:justify-center gap-4 mb-14 overflow-x-auto no-scrollbar px-4 sm:px-0"
        >
          {categories.map(({ label, icon }) => {
            const isActive = filter === label;
            return (
              <button
                key={label}
                onClick={() => setFilter(label)}
                aria-current={isActive ? "true" : undefined}
                className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold border-2 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-yellow-400 transition text-sm sm:text-base ${
                  isActive
                    ? "bg-yellow-500 text-white border-yellow-500 shadow-lg"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-yellow-100"
                }`}
              >
                <span className="text-xl">{icon}</span>
                <span>{label}</span>
              </button>
            );
          })}
        </nav>

        {/* Stories Grid */}
        {filteredStories.length > 0 ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredStories.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                onReactionToggle={handleReactionToggle}
              />
            ))}
          </section>
        ) : (
          <p className="text-center text-gray-600 font-semibold text-lg mt-20">
            No stories found in this category.
          </p>
        )}
      </main>
    </>
  );
}
