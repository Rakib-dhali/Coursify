export async function getCourses() {
  const res = await fetch("https://skillsphere-rakib.vercel.app/data.json");

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}