export default function CourseDetailsSkeleton() {
  return (
    <div className="px-5 md:px-10 py-12 w-full max-w-369 mx-auto bg-white animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="aspect-video w-full rounded-2xl bg-gray-300"></div>
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
            <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="h-5 w-28 bg-gray-300 rounded"></div>
            <div className="h-5 w-24 bg-gray-300 rounded"></div>
            <div className="h-5 w-20 bg-gray-300 rounded"></div>
            <div className="h-5 w-32 bg-gray-300 rounded"></div>
          </div>
          <div className="flex items-center flex-wrap gap-5">
            <div className="h-10 w-36 bg-gray-300 rounded-xl"></div>
            <div className="h-10 w-10 bg-gray-300 rounded-lg"></div>
            <div className="h-10 w-10 bg-gray-300 rounded-lg"></div>
            <div className="h-9 w-9 bg-gray-300 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
              <div className="h-3 w-20 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
