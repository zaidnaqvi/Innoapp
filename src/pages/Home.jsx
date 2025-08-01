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
      <section className="container mx-auto px-4 py-16 text-center max-w-3xl space-y-6">
        <p className="text-gray-700 text-xl md:text-2xl leading-relaxed font-medium">
          Everyone has setbacks. Here, you can share yours{" "}
          <span className="text-black font-semibold">anonymously</span> and find
          comfort in knowing you’re not alone.
        </p>
        <p className="text-gray-500 md:text-lg max-w-2xl mx-auto mt-2">
          Our community fosters empathy, healing, and growth through openly
          shared experiences. Read, relate, and find hope in every story.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
          What Our Users Say
        </h2>
        <div className="space-y-10">
          <blockquote className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-xl italic text-gray-700">
              “Sharing my story here helped me see failure in a new light. The
              support is incredible.”
            </p>
            <footer className="mt-4 text-right text-gray-600 font-semibold">
              — Sarah M.
            </footer>
          </blockquote>
          <blockquote className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-xl italic text-gray-700">
              “Reading stories from others reminds me I’m not alone, and that’s
              powerful.”
            </p>
            <footer className="mt-4 text-right text-gray-600 font-semibold">
              — James L.
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Featured Stories Teaser */}
      <section className="container mx-auto px-4 py-16 max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Featured Stories
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Dive into some of the most inspiring failure stories from our
          community and how they turned setbacks into success.
        </p>
        <Link
          to="/browse"
          className="inline-block bg-yellow-500 text-black font-bold px-6 py-3 rounded shadow hover:bg-yellow-600 transition"
        >
          Explore Stories
        </Link>
      </section>

      {/* Call to Action Section */}
      <section className="bg-yellow-600 py-16 text-center text-white">
        <h3 className="text-3xl font-extrabold mb-4">
          Ready to Share Your Journey?
        </h3>
        <p className="mb-8 max-w-xl mx-auto">
          Join our community today and inspire others by sharing your story of
          failure and growth.
        </p>
        <Link
          to="/login"
          className="bg-white text-yellow-600 font-bold px-10 py-4 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>
    </>
  );
}
