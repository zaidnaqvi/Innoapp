import {
  FaExternalLinkAlt,
  FaRegLightbulb,
  FaHeart,
  FaBookOpen,
} from "react-icons/fa";

export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen max-w-3xl">
      <h2 className="text-4xl font-extrabold text-black mb-10 text-center tracking-tight">
        Resources & Tips
      </h2>
      <section className="space-y-6">
        {/* Resource cards */}
        <div className="bg-white shadow rounded-xl p-6 flex items-start gap-4">
          <FaBookOpen className="text-blue-600 mt-1" size={28} />
          <div>
            <a
              href="https://www.failory.com/blog/famous-failures"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-black hover:text-blue-700 underline flex items-center gap-2"
            >
              Famous Failures and What They Teach Us
              <FaExternalLinkAlt
                className="inline text-gray-400 mb-1"
                size={14}
              />
            </a>
            <div className="text-gray-600 text-sm mt-1">
              Stories of famous people who failed and bounced back—read for
              inspiration!
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-6 flex items-start gap-4">
          <FaRegLightbulb className="text-yellow-500 mt-1" size={28} />
          <div>
            <a
              href="https://www.psychologytoday.com/us/basics/resilience"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-black hover:text-yellow-600 underline flex items-center gap-2"
            >
              Building Resilience: Psychology Today
              <FaExternalLinkAlt
                className="inline text-gray-400 mb-1"
                size={14}
              />
            </a>
            <div className="text-gray-600 text-sm mt-1">
              Learn how to develop resilience and embrace setbacks as part of
              growth.
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-6 flex items-start gap-4">
          <FaBookOpen className="text-teal-600 mt-1" size={28} />
          <div>
            <a
              href="https://www.mindtools.com/pages/article/newLDR_68.htm"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-black hover:text-teal-700 underline flex items-center gap-2"
            >
              How to Learn from Failure – Mind Tools
              <FaExternalLinkAlt
                className="inline text-gray-400 mb-1"
                size={14}
              />
            </a>
            <div className="text-gray-600 text-sm mt-1">
              Tools and strategies to turn failure into growth.
            </div>
          </div>
        </div>
        {/* Non-link motivational cards */}
        <div className="bg-white shadow rounded-xl p-6 flex items-start gap-4">
          <FaRegLightbulb className="text-blue-400 mt-1" size={28} />
          <div>
            <span className="font-semibold text-black">
              Boost your growth mindset
            </span>
            <div className="text-gray-600 text-sm mt-1">
              Try daily reflection, inspiring quotes, or write down what you
              learn from setbacks.
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-6 flex items-start gap-4">
          <FaHeart className="text-pink-500 mt-1" size={28} />
          <div>
            <span className="font-semibold text-black">
              Caring for your mental health
            </span>
            <div className="text-gray-600 text-sm mt-1">
              If failure feels overwhelming, don’t hesitate to seek help. See
              our{" "}
              <a
                href="https://www.mhanational.org/get-involved/contact-us"
                target="_blank"
                rel="noreferrer"
                className="underline text-pink-600 hover:text-pink-800"
              >
                mental health resources
              </a>
              .
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
