const Banner = () => {
  return (
    <>
      <div
        className="mx-auto bg-cover bg-center max-w-369 w-full aspect-video mt-5 md:mt-10 lg:mt-20 flex flex-col items-start justify-center gap-5 md:gap-8 lg:gap-10  "
        style={{ backgroundImage: "url('/assets/banner.png')" }}
      >
        <h1 className="font-bold hidden text-2xl pl-5 md:text-3xl lg:text-6xl text-blue-950 md:flex items-center flex-wrap w-2/3 leading-20">
          Level Up Your Skills with skillSphere
        </h1>
        <p className="pl-5 text-gray-500 hidden md:flex text-xl">
          Learn in-demand skills through interactive courses, real-world
          projects, <br /> and expert guidance—all in one place.
        </p>
        <button className="ml-5 hidden cursor-pointer hover:bg-blue-200 md:flex font-medium text-xl border border-blue-600 rounded-full px-5 py-3 bg-blue-100 ">
          Browse All Courses
        </button>
      </div>
      <div className="md:hidden flex flex-col gap-5">
        <h1 className="font-bold text-3xl p-10 l text-blue-950 flex items-center text-center ">
          Level Up Your Skills with skillSphere
        </h1>
        <p className="text-center text-gray-500 text-xl">
          Learn in-demand skills through interactive courses, real-world
          projects, and expert guidance—all in one place.
        </p>
        <button className="font-medium cursor-pointer hover:bg-blue-200 text-xl border border-blue-600 rounded-full px-5 py-3 bg-blue-100 ">
          Browse All Courses
        </button>
      </div>
    </>
  );
};

export default Banner;
