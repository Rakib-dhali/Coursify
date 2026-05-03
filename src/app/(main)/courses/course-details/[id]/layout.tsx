import CourseCurriculum from "@/components/Curriculam";

export default function DetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
      {children}
      <CourseCurriculum/>
  </>;
}