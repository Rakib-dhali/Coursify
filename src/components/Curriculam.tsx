"use client";

import { Lesson, Module } from "@/type";
import { useState } from "react";

const modules: Module[] = [
  {
    id: "01",
    title: "Frontend Foundations",
    subtitle: "6 lessons · 4h",
    badge: "Beginner",
    accent: {
      num: "bg-blue-100 text-blue-800",
      badge: "bg-blue-100 text-blue-800",
      border: "border-blue-200",
    },
    lessons: [
      {
        icon: "▶",
        name: "HTML & semantic structure",
        dur: "35m",
        type: "video",
      },
      {
        icon: "▶",
        name: "CSS layout with flexbox & grid",
        dur: "45m",
        type: "video",
      },
      {
        icon: "▶",
        name: "Responsive design & media queries",
        dur: "40m",
        type: "video",
      },
      { icon: "▶", name: "JavaScript fundamentals", dur: "55m", type: "video" },
      {
        icon: "▶",
        name: "DOM manipulation & events",
        dur: "50m",
        type: "video",
      },
      {
        icon: "✦",
        name: "Build a landing page — project",
        dur: "35m",
        type: "project",
      },
    ],
  },
  {
    id: "02",
    title: "React & Next.js",
    subtitle: "6 lessons · 4.5h",
    badge: "Intermediate",
    accent: {
      num: "bg-emerald-100 text-emerald-800",
      badge: "bg-emerald-100 text-emerald-800",
      border: "border-emerald-200",
    },
    lessons: [
      {
        icon: "▶",
        name: "React components & props",
        dur: "40m",
        type: "video",
      },
      {
        icon: "▶",
        name: "State management with hooks",
        dur: "50m",
        type: "video",
      },
      {
        icon: "▶",
        name: "Next.js App Router & routing",
        dur: "45m",
        type: "video",
      },
      {
        icon: "▶",
        name: "Server vs client components",
        dur: "50m",
        type: "video",
      },
      {
        icon: "▶",
        name: "Data fetching & API routes",
        dur: "55m",
        type: "video",
      },
      {
        icon: "✦",
        name: "Build a blog app — project",
        dur: "40m",
        type: "project",
      },
    ],
  },
  {
    id: "03",
    title: "Backend & Deployment",
    subtitle: "6 lessons · 3.5h",
    badge: "Advanced",
    accent: {
      num: "bg-amber-100 text-amber-800",
      badge: "bg-amber-100 text-amber-800",
      border: "border-amber-200",
    },
    lessons: [
      { icon: "▶", name: "Node.js & Express setup", dur: "35m", type: "video" },
      {
        icon: "▶",
        name: "MongoDB & Mongoose models",
        dur: "45m",
        type: "video",
      },
      {
        icon: "▶",
        name: "REST API design & auth (JWT)",
        dur: "50m",
        type: "video",
      },
      {
        icon: "▶",
        name: "TypeScript for full-stack apps",
        dur: "40m",
        type: "video",
      },
      {
        icon: "▶",
        name: "CI/CD with GitHub Actions",
        dur: "35m",
        type: "video",
      },
      {
        icon: "✦",
        name: "Deploy full-stack app — project",
        dur: "35m",
        type: "project",
      },
    ],
  },
];

interface LessonRowProps {
  lesson: Lesson;
}

function LessonRow({ lesson }: LessonRowProps) {
  const isProject = lesson.type === "project";
  const colorClass = isProject
    ? "bg-orange-100 text-orange-700"
    : "bg-gray-100 text-gray-500";

  return (
    <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
      <div
        className={`w-7 h-7 rounded-md flex items-center justify-center text-xs shrink-0 ${colorClass}`}
      >
        {lesson.icon}
      </div>
      <span className="flex-1 text-sm text-gray-800">{lesson.name}</span>
      <span
        className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorClass}`}
      >
        {lesson.type}
      </span>
      <span className="text-xs text-gray-400 w-8 text-right">{lesson.dur}</span>
    </div>
  );
}

interface ModuleCardProps {
  mod: Module;
}

function ModuleCard({ mod }: ModuleCardProps) {
  const [open, setOpen] = useState<boolean>(mod.id === "01");

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors text-left"
      >
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${mod.accent.num}`}
        >
          {mod.id}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 leading-tight">
            {mod.title}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">{mod.subtitle}</p>
        </div>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${mod.accent.badge}`}
        >
          {mod.badge}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="border-t border-gray-100">
          {mod.lessons.map((lesson, i) => (
            <LessonRow key={i} lesson={lesson} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CourseCurriculum() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-369 w-full mx-auto">
        <div className="flex flex-col gap-3">
          {modules.map((mod) => (
            <ModuleCard key={mod.id} mod={mod} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-xl transition-colors">
            Enroll now — it is free
          </button>
        </div>
      </div>
    </div>
  );
}
