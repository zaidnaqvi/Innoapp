import { useState } from "react";

const categories = ["Academic", "Personal", "Professional"];

export default function Share() {
  const [category, setCategory] = useState(categories[0]);
  const [text, setText] = useState("");
  const [learned, setLearned] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Backend API call placeholder
    console.log({ category, text, learned });
    setSubmitted(true);
    setCategory(categories[0]);
    setText("");
    setLearned("");
  }

  return (
    <div className="container mx-auto px-6 py-12 min-h-screen max-w-3xl">
      <h2 className="text-4xl font-extrabold text-black mb-8 text-center tracking-tight">
        Share Your Failure Anonymously
      </h2>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-8"
          aria-label="Failure sharing form"
        >
          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-semibold text-gray-900"
            >
              Category <span className="text-red-600">*</span>
            </label>
            <select
              id="category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Failure Story */}
          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-semibold text-gray-900"
            >
              Failure Story <span className="text-red-600">*</span>
            </label>
            <textarea
              id="text"
              required
              rows={6}
              placeholder="Write your failure story here"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 resize-y focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
            />
            <p className="mt-1 text-xs text-gray-500 italic">
              Be honest and kind to yourself — this is a safe space.
            </p>
          </div>

          {/* What Did You Learn (optional) */}
          <div>
            <label
              htmlFor="learned"
              className="block mb-2 text-sm font-semibold text-gray-900"
            >
              What Did You Learn?{" "}
              <span className="text-gray-400">(optional)</span>
            </label>
            <textarea
              id="learned"
              rows={3}
              placeholder="Your lesson or reflection"
              value={learned}
              onChange={(e) => setLearned(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 resize-y focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-md shadow-md transition-colors focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            Submit Anonymously
          </button>
        </form>
      ) : (
        <div className="bg-green-50 border border-green-400 text-green-800 p-6 rounded-md max-w-md mx-auto text-center shadow-md">
          <p className="text-lg font-semibold mb-4">
            Thank you for sharing your story.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="underline text-purple-700 hover:text-purple-900 focus:outline-none"
          >
            Share Another
          </button>
        </div>
      )}
    </div>
  );
}
