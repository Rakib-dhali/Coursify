"use client";

import { useRouter } from "next/navigation";

export default function DetailsButton({ id }: { id: number }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/courses/course-details/${id}`)}
      className="w-full bg-blue-200 py-2 rounded-lg hover:bg-blue-300"
    >
      View Details
    </button>
  );
}