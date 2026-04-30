"use client";

import Image from "next/image";
import { Course } from "@/type";
import { useRouter } from "next/navigation";

export default function PopularCourses({ courses }: { courses: Course[] }) {
    const router = useRouter();

    const topCourses = courses.filter((course: Course) => course.rating > 4.5).slice(0, 3);
  return (
    <section className="px-6 md:px-12 py-12 w-full max-w-369 mx-auto bg-white">
      {/* Header */}
      <div className="flex items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Most Popular Courses
        </h2>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {topCourses.map((course: Course) => (
          <div
            key={course.id}
            className="bg-blue-50 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden border border-blue-400"
          >
            {/* Image */}
            <div className="relative w-full h-40">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Title */}
              <h3 className="font-semibold text-gray-800 line-clamp-2">
                {course.title}
              </h3>

              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                <span className="font-medium text-xl ">🧑‍💻 {course.instructor}</span>
                <span>⭐ {course.rating}</span>
              </div>
              <button onClick={() => router.push(`/course/${course.id}`)} className="w-full cursor-pointer bg-blue-200 border-blue-300 py-2 rounded-lg hover:bg-blue-300 font-semibold transition">View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}