import { Link } from "react-router-dom";
import bannerImg from "../assets/img.jpg"; // Your preferred image

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <section
        className="relative h-[450px] md:h-[650px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
        aria-label="Inspirational banner"
      >
        {/* Dark overlay with gentle gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />

        {/* Banner Content */}
        <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-300 drop-shadow-lg mb-6 leading-tight">
            Why{" "}
            <span className="underline decoration-yellow-400 decoration-8 underline-offset-8">
              I Failed
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-yellow-100 max-w-3xl mx-auto mb-6 highlight-text-shadow font-semibold tracking-wide">
            A safe, anonymous space to share your failures and inspire hope.
          </p>
          <p className="text-yellow-200 italic max-w-xl mx-auto mb-12 drop-shadow-sm leading-relaxed">
            “Failure is not the opposite of success — it’s part of success.”
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-sm mx-auto animate-fade-in">
            <Link
              to="/login"
              className="bg-yellow-400 text-black font-bold px-10 py-3 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-300"
              aria-label="Share your story - requires login"
            >
              Share Your Story
            </Link>
            <Link
              to="/browse"
              className="bg-transparent border-2 border-yellow-400 text-yellow-300 font-bold px-10 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-300"
              aria-label="Browse shared stories"
            >
              Browse Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Informational Section */}
      <section className="container max-w-3xl mx-auto px-6 py-16 text-center space-y-8">
        <p className="text-gray-800 text-2xl md:text-3xl font-semibold tracking-wide sm:px-4">
          Everyone has setbacks. Here, you can share yours{" "}
          <span className="text-yellow-600 font-extrabold">anonymously</span>{" "}
          and find comfort in knowing you’re not alone.
        </p>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          Our community fosters empathy, healing, and growth through openly
          shared experiences. Read, relate, and find hope in every story.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="bg-yellow-50 py-16">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-14 tracking-tight">
            What Our Users Say
          </h2>
          <div className="space-y-12 max-w-3xl mx-auto">
            {/* Testimonial 1 */}
            <figure className="bg-white rounded-xl p-8 shadow-lg border border-yellow-300">
              <blockquote>
                <p className="text-xl text-gray-700 italic leading-relaxed drop-shadow-sm">
                  “Sharing my story here helped me see failure in a new light.
                  The support is incredible.”
                </p>
              </blockquote>
              <figcaption className="mt-6 text-right font-semibold text-yellow-700">
                — Sarah M.
              </figcaption>
            </figure>
            {/* Testimonial 2 */}
            <figure className="bg-white rounded-xl p-8 shadow-lg border border-yellow-300">
              <blockquote>
                <p className="text-xl text-gray-700 italic leading-relaxed drop-shadow-sm">
                  “Reading stories from others reminds me I’m not alone, and
                  that’s powerful.”
                </p>
              </blockquote>
              <figcaption className="mt-6 text-right font-semibold text-yellow-700">
                — James L.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Featured Stories Teaser */}
      <section className="container max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Featured Stories
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto px-2 md:px-0 md:text-lg leading-relaxed">
          Dive into some of the most inspiring failure stories from our
          community, and discover how setbacks became stepping stones for
          success.
        </p>
        <Link
          to="/browse"
          className="inline-block bg-yellow-500 text-black font-bold px-8 py-3 rounded shadow-lg hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-400"
          aria-label="Explore featured stories"
        >
          Explore Stories
        </Link>
      </section>

      {/* Call to Action Section */}
      <section className="bg-yellow-600 py-20 text-center text-white">
        <h3 className="text-4xl font-extrabold mb-6 tracking-wide">
          Ready to Share Your Journey?
        </h3>
        <p className="max-w-xl mx-auto mb-10 text-lg md:text-xl leading-relaxed px-4">
          Join our community today and inspire others by sharing your story of
          failure and growth. Your voice matters.
        </p>
        <Link
          to="/login"
          className="bg-white text-yellow-600 font-bold px-12 py-4 rounded-lg shadow-xl hover:bg-yellow-100 transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-300"
          aria-label="Get started by logging in"
        >
          Get Started
        </Link>
      </section>
    </>
  );
}
