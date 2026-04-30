import { getCourses } from "@/lib/getCourses";
import { Course } from "@/type";
import {
  Bookmark,
  ChartNoAxesColumn,
  ExternalLink,
  History,
  Star,
} from "lucide-react";
import Image from "next/image";

const CourseDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const courses = await getCourses();
  const courseById = courses.find((course: Course) => course.id === Number(id));
  const {
    title,
    description,
    level,
    instructor,
    ratingCount,
    duration,
    rating,
    image,
  } = courseById;
  return (
    <div className="px-5 md:px-10 py-12 w-full max-w-369 mx-auto bg-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Image
          className="aspect-video w-full rounded-2xl"
          width={150}
          height={150}
          src={image}
          alt={title}
        />
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h2 className="text-blue-900 font-bold text-3xl">{title}</h2>
          <p className="text-gray-500">{description}</p>
          <div className="flex items-center flex-wrap">
            <span className="flex mb-3 items-center gap-2 pr-5 border-r-2 border-gray-400  ">
              <ChartNoAxesColumn /> {level}
            </span>
            <span className="flex mb-3 items-center gap-2 px-5 border-r-2 border-gray-400 ">
              <History /> {duration}
            </span>
            <span className="flex mb-3 items-center gap-2 px-5 border-r-2 border-gray-400 ">
              14 Lessons
            </span>
            <span className="flex mb-3 items-center gap-2 px-5 ">
              {rating} <Star color="#f2ff00" /> {ratingCount} Ratings
            </span>
          </div>
          <div className="flex items-center flex-wrap justify-start gap-5">
            <button className="bg-blue-600 text-white font font-bold px-4 py-2 rounded-xl">
              Start Learning
            </button>
            <button className="rounded-lg p-1.5  border-blue-300 bg-blue-100  border ">
              <Bookmark />
            </button>
            <button className="rounded-lg p-1.5  border-blue-300 bg-blue-100  border ">
              <ExternalLink />
            </button>
            <Image
              width={35}
              height={35}
              className="rounded-full"
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="k"
            />
            <div>
              <p className="font-bold text-sm">{instructor}</p>
              <p className="text-sm text-gray-500">Instructor</p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CourseDetailsPage;
