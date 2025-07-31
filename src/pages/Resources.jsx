export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen max-w-3xl">
      <h2 className="text-3xl font-semibold text-purple-700 mb-6">Resources & Tips</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>
          <a href="https://www.failory.com/blog/famous-failures" target="_blank" rel="noreferrer" className="text-purple-600 underline">
            Famous Failures and What They Teach Us
          </a>
        </li>
        <li>
          <a href="https://www.psychologytoday.com/us/basics/resilience" target="_blank" rel="noreferrer" className="text-purple-600 underline">
            Building Resilience: Psychology Today Article
          </a>
        </li>
        <li>
          <a href="https://www.mindtools.com/pages/article/newLDR_68.htm" target="_blank" rel="noreferrer" className="text-purple-600 underline">
            How to Learn from Failure - Mind Tools
          </a>
        </li>
        <li>
          Boost your growth mindset with motivational quotes and exercises.
        </li>
        <li>Explore mental health resources if failure causes distress.</li>
      </ul>
    </div>
  );
}
