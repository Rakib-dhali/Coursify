"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { instructor } from "@/type";

export default function TopInstructors() {
  const instructors: instructor[] = [
    {
      id: 1,
      name: "Ronald Richards",
      subject: "Machine Learning",
      rating: 5.0,
      ratingCount: 2023,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Theresa Webb",
      subject: "Web Development",
      rating: 4.9,
      ratingCount: 3043,
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: 3,
      name: "Leslie Alexander",
      subject: "Programming",
      rating: 4.8,
      ratingCount: 1203,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "Darrell Steward",
      subject: "Data Science",
      rating: 5.0,
      ratingCount: 243,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 5,
      name: "Jenny Wilson",
      subject: "Math",
      rating: 4.7,
      ratingCount: 2023,
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
  ];
  const [index, setIndex] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ maxWidth: 767 });
  const isLaptop = useMediaQuery({ maxWidth: 1023 });

  const visibleCards = isMobile ? 1 : isTablet ? 2 : isLaptop ? 3 : 4;

  const nextSlide = () => {
    if (index < instructors.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const clampedIndex = Math.min(
    index,
    Math.max(0, instructors.length - visibleCards),
  );

  return (
    <div className="w-full py-10 ">
      <h2 className="text-3xl font-bold text-center mb-8">Top Instructors</h2>

      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${clampedIndex * (100 / visibleCards)}%)`,
          }}
        >
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="px-3 shrink-0 "
              style={{ width: `${100 / visibleCards}%` }}
            >
              <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6 text-center shadow-md">
                <Image
                  width={96}
                  height={96}
                  src={instructor.image}
                  alt={instructor.name}
                  className="mx-auto rounded-full border-2 border-blue-600 mb-4"
                />
                <h3 className="font-semibold">{instructor.name}</h3>
                <p className="text-sm text-gray-500">{instructor.subject}</p>

                <div className="flex justify-center items-center gap-1 mt-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold">{instructor.rating}</span>
                  <span className="text-gray-600">
                    ({instructor.ratingCount})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="bg-blue-50 border cursor-pointer hover:bg-blue-100 border-blue-100 p-2 rounded-full "
            onClick={prevSlide}
            disabled={clampedIndex === 0}
          >
            <ChevronLeft />
          </button>
          <button
            className="bg-blue-50 border cursor-pointer hover:bg-blue-100 border-blue-100 p-2 rounded-full"
            onClick={nextSlide}
            disabled={clampedIndex >= instructors.length - visibleCards}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
