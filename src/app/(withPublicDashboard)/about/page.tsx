import Image from "next/image";
// import "../Home.css";
import LinkBox from "@/components/modules/(Public-Dashboard))/shared/LinkBox/LinkBox";

// import aboutImage from "../../../assets/aboutImage/sarkar_nayan_about.jpg";
import aboutImage from "@/app/assets/aboutImage/sarkar_nayan_about.jpg";
import BioData from "@/components/modules/(Public-Dashboard))/About/BioData/BioData";
import SkillLoading from "@/components/modules/(Public-Dashboard))/About/SkillLoading/SkillLoading";
import EducationExperience from "@/components/modules/(Public-Dashboard))/About/EducationExperience/EducationExperience";
import KnowladgeInterest from "@/components/modules/(Public-Dashboard))/About/KnowladgeInterest/KnowladgeInterest";
import { createTitle } from "@/components/utils/functions/metadata";
import HomeButton from "@/components/modules/(Public-Dashboard))/Home/HomeButton/HomeButton";
// import TestimonialMx from "@/components/modules/(Public-Dashboard))/Home/Testimonial/TestimonialMx";
import Testimonial from "@/components/modules/(Public-Dashboard))/Home/Testimonial/Testimonial";

export const metadata = createTitle("About");

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      <div className="pPadding">
        <LinkBox text1={"Home"} text2={"About"} />
        {/* <h1 className="my-10 text-3xl text-white font-bold">About Me</h1> */}
        <h1 className="my-10 pageTitle">About Me</h1>
        {/* 
        <Image
          src={aboutImage}
          alt="Sarkar Nayan"
          // height={650}
          className="object-cover"
        /> */}

        <div className="w-full  ">
          <Image
            src={aboutImage}
            alt="Sarkar Nayan"
            width={350}
            height={350}
            className="abs_img border-8 border-[#cccccc] mx-auto w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover"
          />
        </div>

        <div className="my-10">
          <h2 className=" font-bold capitalize text-[2rem] md:text-[3rem]">
            Sarkar Nayan
          </h2>
          <p className="font-bold">
            Web Designer & Developer, Graphics & UI UX designer.
          </p>
        </div>

        <div className="dag"></div>
        <div className=" my-10 ">
          <p className="text-[16px] leading-[1.8] pDesc">
            Highly motivated and detail-oriented Web Developer with a
            Bachelor&#39;s degree in Computer Science and Engineering for 4
            years. Proficient in PHP, with a deep understanding of the Laravel
            framework. Seeking to leverage my technical skills and passion for
            web development to provide high-quality, user-centric solutions in a
            challenging role. Committed to producing high-quality, innovative,
            and scalable code to drive the success of your team and projects.
          </p>
        </div>

        {/* Dag */}
        <div className="dag"></div>
        <div className="my-10 ">
          <BioData />
        </div>
        <div className="dag"></div>

        <div className="my-10  inline-block ">
          <HomeButton fromAbout={true} />
        </div>
      </div>

      <div className="pPadding bg-[#222222]">
        <SkillLoading />
      </div>

      <div className="pPadding">
        <KnowladgeInterest />
      </div>

      <div className="bg-[#222222] pPadding">
        <EducationExperience />
      </div>

      {/* <div className="pPadding ">
        <Testimonial showBox={true} />
      </div> */}
      <div className="pPadding ">
        {/* <TestimonialMx /> */}
        <Testimonial showBox={false} />
      </div>
    </div>
  );
};

export default AboutPage;
