export default function CoursesSkeleton() {
  return (
    <section className="px-6 md:px-12 py-12 w-full max-w-369 mx-auto bg-white animate-pulse">
      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="h-8 w-40 bg-gray-300 rounded"></div>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-blue-50 rounded-2xl shadow-sm overflow-hidden border border-blue-200"
          >
            {/* Image */}
            <div className="w-full h-40 bg-gray-300"></div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Title */}
              <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-300 rounded"></div>

              {/* Stats */}
              <div className="flex items-center justify-between pt-2">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                <div className="h-4 w-12 bg-gray-300 rounded"></div>
              </div>

              {/* Button */}
              <div className="h-10 w-full bg-gray-300 rounded-lg mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}