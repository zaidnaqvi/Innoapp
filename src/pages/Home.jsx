import { Link } from "react-router-dom";
import bannerImg from "../assets/img.jpg"; // Use your preferred image

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <section
        className="relative h-[400px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/40" />

        {/* Content on banner */}
        <div className="relative z-10 text-center px-4 max-w-3xl w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-5">
            Why{" "}
            <span className="underline decoration-yellow-300 decoration-8 underline-offset-8">
              I Failed
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-yellow-100 mb-6 drop-shadow-md tracking-wide font-medium">
            A safe, anonymous space to share your failures and inspire hope.
          </p>
          <p className="text-yellow-200 italic mb-10 max-w-xl mx-auto drop-shadow">
            "Failure is not the opposite of success — it’s part of success."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/login"
              className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg shadow-md hover:bg-yellow-500 hover:-translate-y-1 transition-all focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              Share Your Story
            </Link>

            <Link
              to="/browse"
              className="bg-transparent border-2 border-yellow-400 text-yellow-200 font-bold px-8 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-all"
            >
              Browse Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Informational Section */}
      <section className="container mx-auto px-4 py-16 text-center max-w-3xl">
        <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-4 font-medium">
          Everyone has setbacks. Here, you can share yours{" "}
          <span className="text-black font-semibold">anonymously</span> and find
          comfort in knowing you’re not alone.
        </p>
        <p className="text-gray-500 md:text-lg max-w-2xl mx-auto mt-2">
          Our community fosters empathy, healing, and growth through openly
          shared experiences. Read, relate, and find hope in every story.
        </p>
      </section>
    </>
  );
}
