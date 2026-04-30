import Banner from "@/components/Banner";
import PopularCourses from "@/components/PopularCourses";
import LearningTips from "@/components/Tips";
import TopInstructors from "@/components/TopInstructor";

export default function HomePage() {
  return (
    <>
     <Banner/>
     <PopularCourses/>
     <LearningTips/>
     <TopInstructors/>
    </>
  );
}
