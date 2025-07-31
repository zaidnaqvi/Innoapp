import { Link } from "react-router-dom";
import bannerImg from "../assets/img.jpg"; // Make sure to place an image file here or use a URL

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <section
        className="relative h-[400px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* Content on banner */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Why{" "}
            <span className="underline decoration-yellow-300">I Failed</span>
          </h1>
          <p className="text-lg md:text-xl text-yellow-200 mb-6 drop-shadow-md">
            A safe, anonymous space to share your failures and inspire hope.
          </p>
          <p className="text-yellow-100 italic mb-8 max-w-xl mx-auto drop-shadow-sm">
            "Failure is not the opposite of success — it’s part of success."
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              to="/share"
              className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded shadow-lg hover:bg-yellow-500 transition"
            >
              Share Your Story
            </Link>
            <Link
              to="/browse"
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold px-8 py-3 rounded hover:bg-yellow-400 hover:text-black transition"
            >
              Browse Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Below Banner - Informational Text */}
      <section className="container mx-auto px-4 py-12 text-center max-w-3xl">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Everyone has setbacks — here, you can share yours anonymously and find
          comfort in knowing you’re not alone. Our community fosters empathy,
          healing, and growth through shared experiences.
        </p>
      </section>
    </>
  );
}
