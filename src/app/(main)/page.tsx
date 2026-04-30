import Banner from "@/components/Banner";
import PopularCourses from "@/components/PopularCourses";
import LearningTips from "@/components/Tips";

export default async function HomePage() {
  const res = await fetch("https://skillsphere-rakib.vercel.app/data.json")
  const courses = await res.json()
  return (
    <>
     <Banner/>
     <PopularCourses courses={courses}/>
     <LearningTips/>
    </>
  );
}
