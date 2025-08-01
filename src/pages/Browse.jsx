import { useState } from "react";
import StoryCard from "../component/StoryCard";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUser,
  FaListAlt,
} from "react-icons/fa";

const categories = [
  { label: "All", icon: <FaListAlt /> },
  { label: "Academic", icon: <FaGraduationCap /> },
  { label: "Personal", icon: <FaUser /> },
  { label: "Professional", icon: <FaBriefcase /> },
];

const sampleStories = [
  {
    id: 1,
    category: "Academic",
    text: "I failed an important exam and felt devastated.",
    learned: "Never underestimate consistent study.",
    date: "2025-07-10",
    reactions: { metoo: 3, hug: 2, notalone: 1 },
  },
  {
    id: 2,
    category: "Professional",
    text: "My startup pitch was rejected multiple times.",
    learned: "Persistence is key to success.",
    date: "2025-06-20",
    reactions: { metoo: 5, hug: 0, notalone: 3 },
  },
];

export default function Browse() {
  const [filter, setFilter] = useState("All");
  const [stories, setStories] = useState(sampleStories);

  const filteredStories =
    filter === "All"
      ? stories
      : stories.filter((story) => story.category === filter);

  // Update reactions count when user reacts/unreacts
  const handleReactionChange = (storyId, type, reacted) => {
    setStories((prevStories) =>
      prevStories.map((story) => {
        if (story.id !== storyId) return story;

        const currentCount = story.reactions?.[type] || 0;
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
    <main className="container mx-auto px-6 py-12 min-h-screen max-w-5xl bg-white">
      <h2 className="text-4xl font-extrabold text-black mb-10 text-center tracking-tight">
        Browse Failure Stories
      </h2>

      {/* Category filters */}
      <nav
        aria-label="Story categories"
        className="flex flex-wrap justify-center gap-5 mb-12"
      >
        {categories.map(({ label, icon }) => {
          const isActive = filter === label;
          return (
            <button
              key={label}
              onClick={() => setFilter(label)}
              aria-current={isActive ? "true" : undefined}
              className={`flex items-center space-x-2 px-6 py-2 rounded-full border font-semibold transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-black ${
                isActive
                  ? "bg-black text-white scale-105 shadow-lg border-black"
                  : "bg-white text-black border-black hover:bg-black hover:text-white"
              }`}
            >
              <span className="text-lg">{icon}</span>
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      {/* Stories Grid */}
      {filteredStories.length > 0 ? (
        <section className="grid gap-10 sm:grid-cols-2">
          {filteredStories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              blackAndWhite
              reactions={story.reactions}
              onReactionChange={(type, reacted) =>
                handleReactionChange(story.id, type, reacted)
              }
            />
          ))}
        </section>
      ) : (
        <p className="text-center text-gray-700 font-semibold text-lg mt-20">
          No stories found in this category.
        </p>
      )}
    </main>
  );
}
