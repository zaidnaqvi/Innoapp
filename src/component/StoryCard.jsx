export default function StoryCard({ story }) {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-purple-700">{story.category}</span>
        <span className="text-xs text-gray-500">{new Date(story.date).toLocaleDateString()}</span>
      </div>
      <p className="mb-3 text-gray-800">{story.text}</p>
      {story.learned && (
        <p className="italic text-gray-600">Lesson Learned: {story.learned}</p>
      )}
    </div>
  );
}
