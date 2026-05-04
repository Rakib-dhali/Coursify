import Image from "next/image";
import Marquee from "react-fast-marquee";
import apple from "@/assets/apple.png";
import airbnb from "@/assets/airbnb.png";
import figma from "@/assets/figma.png";
import google from "@/assets/google.png";
import meta from "@/assets/meta.png";
import netflix from "@/assets/netflix.png";
import notion from "@/assets/notion.png";
import spotify from "@/assets/shopify.png";
import stripe from "@/assets/stripe.png";

const MarqueeSection = () => {
  return (
    <div className="relative w-full mx-auto max-w-369 px-6 md:px-16 py-16 ">
      <h1 className="text-3xl md:text-4xl text-center text-blue-950 pb-20 font-bold">
        Sponsored By
      </h1>
      <div className="absolute left-0 top-0 h-full md:w-36 w-20 lg:w-48 bg-linear-to-r from-white via-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full md:w-36 w-20 lg:w-48 bg-linear-to-l from-white via-white to-transparent z-10 pointer-events-none" />
      <Marquee autoFill={true}>
        <Image className=" mx-10 md:mx-12 lg:mx-15" src={apple} alt="" width={70} height={70} />
        <Image className=" mx-10 md:mx-12 lg:mx-15" src={airbnb} alt="" width={70} height={70} />
        <Image className=" mx-10 md:mx-12 lg:mx-15" src={figma} alt="" width={70} height={70} />
        <Image className=" mx-10 md:mx-12 lg:mx-15" src={google} alt="" width={70} height={70} />
        <Image className=" mx-10 md:mx-12 lg:mx-15" src={meta} alt="" width={70} height={70} />
        <Image className=" mx-10 md:mx-12 lg:mx-15" src={netflix} alt="" width={70} height={70} />
        <Image className=" mx-10 md:mx-12 lg:mx-15" src={notion} alt="" width={70} height={70} />
        <Image className=" mx-10 md:mx-12 lg:mx-15" src={spotify} alt="" width={70} height={70} />
        <Image className=" mx-10 md:mx-12 lg:mx-15" src={stripe} alt="" width={70} height={70} />
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
