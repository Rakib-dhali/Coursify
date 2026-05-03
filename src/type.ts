
export type Course = {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  rating: number;
  level: string;
  description: string;
  image: string;
  category: string;
};

export interface instructor {
  id: number;
  name: string;
  subject: string;
  rating: number;
  ratingCount: number;
  image: string;
}


type LessonType = "video" | "project";
type BadgeLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Lesson {
  icon: string;
  name: string;
  dur: string;
  type: LessonType;
}

export interface Accent {
  num: string;
  badge: string;
  border: string;
}

export interface Module {
  id: string;
  title: string;
  subtitle: string;
  badge: BadgeLevel;
  accent: Accent;
  lessons: Lesson[];
}

export interface StatItem {
  label: string;
  value: string;
}