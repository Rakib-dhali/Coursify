import DetailsButton from "@/components/DetailsBtn";
import SearchInput from "@/components/Search";
import { getCourses } from "@/lib/getCourses";
import { Course } from "@/type";
import Image from "next/image";

const CoursePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) => {
  const courses = await getCourses();
  const { search } = await searchParams;

  const filtered = search
    ? courses.filter((course: Course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
      )
    : courses;

  return (
    <section className="px-6 md:px-12 py-12 w-full max-w-369 mx-auto bg-white">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          All Courses
        </h2>
      </div>
      <SearchInput/>
      {filtered.length === 0 && (
        <p className="text-gray-500 text-center py-10">
          No courses found for <span className="font-bold text-black"> &quot;{search}&quot;</span>
        </p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map((course: Course) => (
          <div
            key={course.id}
            className="bg-blue-50 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden border border-blue-400"
          >
            <div className="relative w-full h-40">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 space-y-3">
              <h3 className="font-semibold text-gray-800 line-clamp-2">
                {course.title}
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                <span className="font-medium text-xl">
                  🧑‍💻 {course.instructor}
                </span>
                <span>⭐ {course.rating}</span>
              </div>
              <DetailsButton id={course.id} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursePage;