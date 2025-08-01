import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../assets/img.jpg"; // Your preferred image
import img3 from "../assets/img3.jpg"; // Background for Call to Action4
import img4 from "../assets/img4.jpg"; // Image for Informational Section

const testimonials = [
  {
    id: 1,
    quote:
      "Sharing my story here helped me see failure in a new light. The support is incredible.",
    author: "Sarah M.",
  },
  {
    id: 2,
    quote:
      "Reading stories from others reminds me I’m not alone, and that’s powerful.",
    author: "James L.",
  },
  {
    id: 3,
    quote:
      "This community has helped me accept failure as a vital step to success.",
    author: "Maya R.",
  },
];

// The “How Sharing Feels” section exactly like your provided snippet
function HowSharingFeelsSection() {
  return (
    <section className="container mx-auto px-6 py-16 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Left Image: hidden on xs, visible sm+ */}
        <div className="hidden sm:block sm:flex-shrink-0 sm:w-1/2 md:w-5/12 lg:w-5/12 xl:w-4/12">
          <img
            src="//d37v7cqg82mgxu.cloudfront.net/img/home/online-therapy-from-laptop.jpg"
            alt="Sharing failure support illustration"
            loading="lazy"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Right content */}
        <div className="w-full sm:w-1/2 md:w-7/12 lg:w-6/12 xl:w-4/12 px-4">
          <h6 className="text-yellow-600 uppercase font-semibold mb-6 tracking-wide text-3xl">
            How Sharing Feels
          </h6>

          {/* Steps container max width like the original 350px */}
          <div style={{ maxWidth: "390px" }}>
            {[
              "Feel seen and heard — expressing your struggles in a supportive space.",
              "Recognize you're not alone; others share similar setbacks and growth journeys.",
              "Gain clarity and new perspectives by reflecting on your experiences.",
            ].map((text, i) => (
              <div key={i} className="flex items-center mb-3 last:mb-0">
                {/* Large number like original style */}
                <div
                  className="font-bold leading-none"
                  style={{ fontSize: "5em", width: "1em", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {i + 1}
                </div>
                {/* Step description */}
                <div className="font-semibold text-lg leading-6 flex-shrink tracking-wide">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Auto slide every 6 seconds
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <>
      {/* Banner Section */}
      <section
        className="relative h-[450px] md:h-[650px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
        aria-label="Inspirational banner"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-yellow-100 drop-shadow-lg mb-6 tracking-wide">
            Why{" "}
            <span className="underline decoration-yellow-300 decoration-2 underline-offset-8">
              I Failed
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-yellow-100 max-w-3xl mx-auto mb-6 highlight-text-shadow font-light tracking-wide">
            A safe, anonymous space to share your failures and inspire hope.
          </p>
          <p className="text-yellow-200 max-w-xl mx-auto mb-5 drop-shadow-sm tracking-wide">
            “Failure is not the opposite of success — it’s part of success.”
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-sm mx-auto animate-fade-in">
            <Link
              to="/login"
              className="bg-yellow-400 text-black font-bold px-5 py-4 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-yellow-300"
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

      {/* How Sharing Feels Section (exact design from your code snippet) */}
      <HowSharingFeelsSection />

      {/* Informational Section */}
      <section className="container max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Text side */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-gray-800 text-2xl md:text-3xl font-bold tracking-wide sm:px-4">
            Everyone has setbacks. Here, you can share yours{" "}
            <span className="text-yellow-600 font-extrabold">anonymously</span>{" "}
            and find comfort in knowing you’re not alone.
          </p>
          <p className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed px-2 sm:px-0">
            Our community fosters empathy, healing, and growth through openly
            shared experiences. Read, relate, and find hope in every story.
          </p>
        </div>
        {/* Image side */}
        <div className="md:w-1/2">
          <img
            src={img4}
            alt="Empathy and support"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* Testimonials Slider Section */}
      <section className="bg-yellow-50 py-16">
        <div className="container max-w-4xl mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-14 tracking-tight">
            What Our Users Say
          </h2>

          {/* Slides container */}
          <div className="relative max-w-3xl mx-auto overflow-hidden bg-white rounded-xl shadow-lg border border-yellow-300">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map(({ id, quote, author }) => (
                <figure
                  key={id}
                  className="flex-shrink-0 w-full px-8 py-12 text-center"
                  aria-label={`Testimonial from ${author}`}
                >
                  <blockquote>
                    <p className="text-xl text-gray-700 italic leading-relaxed drop-shadow-sm select-text">
                      “{quote}”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 text-yellow-700 font-semibold text-lg">
                    — {author}
                  </figcaption>
                </figure>
              ))}
            </div>
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-yellow-200 hover:bg-yellow-500 text-white shadow-lg p-3 focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* Next Button */}
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-yellow-200 hover:bg-yellow-500 text-white shadow-lg p-3 focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-10 space-x-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={currentIndex === idx}
                className={`h-4 w-4 rounded-full transition-colors duration-300 ${
                  currentIndex === idx
                    ? "bg-yellow-300"
                    : "bg-yellow-200 hover:bg-yellow-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories Teaser */}
      <section className="container max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
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
      <section
        className="relative bg-yellow-600 py-20 text-center text-white"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark gradient overlay, similar to banner */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/20 to-black/10" />

        {/* Content wrapper with relative z-10 to appear above overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h3 className="text-4xl sm:mb-6 font-light mb-28 tracking-wide">
            Ready to Share Your Journey?
          </h3>
          <p className="max-w-xl mx-auto sm:mb-10 mb-16 text-lg md:text-xl leading-relaxed">
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
        </div>
      </section>
    </>
  );
}
