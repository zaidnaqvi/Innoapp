import { useState, useEffect } from "react";
// import your API functions here (getUserStories, addStory, updateStory, deleteStory)
import { Navigate } from "react-router-dom";

// Fake user/auth and API for illustration. Replace with your actual logic!
const mockUser = { name: "John Doe", id: "user123", isLoggedIn: true };
// Demo stories store (simulate fetching from DB)
const initialStories = [
  {
    id: "s1",
    userId: "user123",
    category: "Academic",
    text: "Failed my finals once.",
    learned: "I learned to manage my time.",
    date: "2025-06-12",
  },
];

export default function UserDashboard() {
  // Normally fetch user/authorize
  const user = mockUser;
  const [stories, setStories] = useState(initialStories); // User's stories
  const [editing, setEditing] = useState(null); // Story id if editing
  const [form, setForm] = useState({
    category: "Academic",
    text: "",
    learned: "",
    id: null,
  });
  const [message, setMessage] = useState("");

  // Handle Form Submit (Create or Update)
  function handleSubmit(e) {
    e.preventDefault();
    if (!form.text.trim()) {
      setMessage("Story is required.");
      return;
    }
    if (form.id) {
      // Update
      setStories(stories.map(s => s.id === form.id ? { ...s, ...form } : s));
      setMessage("Story updated!");
    } else {
      // Add New
      const newStory = {
        ...form,
        id: Date.now().toString(),
        userId: user.id,
        date: new Date().toISOString().split("T")[0],
      };
      setStories([newStory, ...stories]);
      setMessage("Story added!");
    }
    setForm({ category: "Academic", text: "", learned: "", id: null });
    setEditing(null);
  }

  // Edit Story
  function editStory(story) {
    setForm({ ...story });
    setEditing(story.id);
    setMessage("");
  }

  // Delete Story
  function deleteStory(id) {
    if (window.confirm("Delete this story?")) {
      setStories(stories.filter(s => s.id !== id));
      setForm({ category: "Academic", text: "", learned: "", id: null });
      setMessage("Story deleted.");
      setEditing(null);
    }
  }

  // If not logged in, redirect to login
  if (!user.isLoggedIn) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-center">Welcome, {user.name.split(" ")[0]}👋</h2>

      <div className="bg-white w-full max-w-2xl shadow-md rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold mb-2">{editing ? "Edit Your Story" : "Share a Failure"}</h3>
        {message && (
          <div className={`mb-2 p-2 rounded text-sm font-semibold ${
            message.includes("added") ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700"
          }`}>{message}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-medium block mb-1">Category</label>
            <select
              className="border rounded px-3 py-2 w-full"
              value={form.category}
              onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
              required
            >
              <option>Academic</option>
              <option>Personal</option>
              <option>Professional</option>
            </select>
          </div>
          <div>
            <label className="font-medium block mb-1">Failure Story *</label>
            <textarea
              className="border rounded px-3 py-2 w-full resize-y"
              required
              rows="4"
              value={form.text}
              onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
              placeholder="Describe your failure"
            />
          </div>
          <div>
            <label className="font-medium block mb-1">What did you learn? (optional)</label>
            <textarea
              className="border rounded px-3 py-2 w-full resize-y"
              rows="2"
              value={form.learned}
              onChange={e => setForm(f => ({ ...f, learned: e.target.value }))}
              placeholder="Lesson you want to share"
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white rounded px-6 py-2 font-semibold"
            >
              {editing ? "Update" : "Share"}
            </button>
            {editing && (
              <button
                type="button"
                className="bg-gray-200 hover:bg-gray-300 text-black rounded px-6 py-2 font-semibold"
                onClick={() => {
                  setForm({ category: "Academic", text: "", learned: "", id: null });
                  setEditing(null);
                  setMessage("");
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* User's Stories Table */}
      <div className="w-full max-w-2xl">
        <h3 className="text-xl font-semibold mb-4">My Failures</h3>
        {stories.length === 0 ? (
          <div className="bg-gray-100 text-gray-500 rounded p-4 text-center">
            You haven't shared any failures yet.
          </div>
        ) : (
          <ul className="space-y-4">
            {stories.map(story => (
              <li
                key={story.id}
                className="bg-white rounded shadow p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="font-bold text-blue-700 text-sm mb-1">{story.category}</div>
                  <div className="text-gray-800 mb-1">{story.text}</div>
                  {story.learned && (
                    <div className="italic text-gray-600 text-sm">
                      <span className="font-semibold text-gray-500">Lesson:</span> {story.learned}
                    </div>
                  )}
                  <div className="text-xs text-gray-400 mt-2">
                    Shared on {story.date}
                  </div>
                </div>
                <div className="flex-shrink-0 flex gap-2 mt-3 sm:mt-0">
                  <button
                    className="text-sm px-4 py-1 bg-teal-600 hover:bg-teal-700 text-white rounded font-medium"
                    onClick={() => editStory(story)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-sm px-4 py-1 bg-red-600 hover:bg-red-700 text-white rounded font-medium"
                    onClick={() => deleteStory(story.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
