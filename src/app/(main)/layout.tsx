import Nav from "@/components/Nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    <Nav />
    <div className="pt-15">
      {children}
    </div>
  </>;
}
