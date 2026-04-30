export default function LearningTips() {
  return (
    <section className="px-6 md:px-12 py-16 mx-auto w-full max-w-369">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Learning Tips
        </h2>
        <p className="text-gray-500 mt-2">
          Boost your productivity and learn smarter with these proven strategies
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        
        {/* Study Techniques */}
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            📘 Study Techniques
          </h3>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li>✔ Break topics into smaller chunks (Micro-learning)</li>
            <li>✔ Use active recall instead of passive reading</li>
            <li>✔ Practice with real-world projects</li>
            <li>✔ Teach what you learn to others</li>
            <li>✔ Use spaced repetition for long-term memory</li>
          </ul>
        </div>

        {/* Time Management */}
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            ⏳ Time Management Tips
          </h3>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li>✔ Set clear daily and weekly learning goals</li>
            <li>✔ Use the Pomodoro technique (25 min focus)</li>
            <li>✔ Avoid multitasking — focus on one task</li>
            <li>✔ Track your progress regularly</li>
            <li>✔ Take breaks to avoid burnout</li>
          </ul>
        </div>

      </div>
    </section>
  );
}