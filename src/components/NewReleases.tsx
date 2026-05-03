import Image from "next/image";
import { Course } from "@/type";
import DetailsButton from "./DetailsBtn";
import { getCourses } from "@/lib/getCourses";

export default async function NewReleases() {
  const courses = await getCourses();
  const newCourses = courses.slice(-3).reverse();

  return (
    <section className="px-6 md:px-12 py-12 w-full max-w-369 mx-auto bg-white">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          New Releases
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {newCourses.map((course: Course) => (
          <div
            key={course.id}
            className="bg-green-50 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden border border-green-400"
          >
            <div className="relative w-full h-40">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                New
              </span>
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
}