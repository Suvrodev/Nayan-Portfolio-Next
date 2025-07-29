import Image from "next/image";
// import "../Home.css";
import LinkBox from "@/components/LinkBox/LinkBox";

// import aboutImage from "../../../assets/aboutImage/sarkar_nayan_about.jpg";
import aboutImage from "@/app/assets/aboutImage/sarkar_nayan_about.jpg";
import BioData from "@/components/modules/About/BioData/BioData";
import SkillLoading from "@/components/modules/About/SkillLoading/SkillLoading";
import EducationExperience from "@/components/modules/About/EducationExperience/EducationExperience";
import Testimonial from "@/components/modules/Home/Testimonial/Testimonial";
import HomeButton from "@/components/modules/Home/HomeButton/HomeButton";
import KnowladgeInterest from "@/components/modules/About/KnowladgeInterest/KnowladgeInterest";
import { createTitle } from "@/components/utils/functions/metadata";

export const metadata = createTitle("About");

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      <div className="pageMargin">
        <LinkBox text1={"About"} />
        {/* <h1 className="my-10 text-3xl text-white font-bold">About Me</h1> */}
        <h1 className="my-10 pageTitle">About Me</h1>

        {/* <img
          className="h-[200px] md:h-[650px] w-full object-cover "
          src={aboutImage}
          alt=""
        /> */}

        {/* <SmartImage
          src={aboutImage} // or base64 string
          alt="My Image"
          className="h-[200px] md:h-[650px] w-full object-cover"
        /> */}
        <Image
          src={aboutImage}
          alt="Sarkae Nayan"
          // height={650}
          className="object-cover"
        />

        <div className="my-10">
          <h1 className=" topicTitle">Sarkar Nayan</h1>
          <p className="font-bold">
            Web Designer & Developer, Graphics & UI UX designer.
          </p>
        </div>

        <div className="dag"></div>
        <div className="text-[18px] my-10 ">
          <p>
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
        <div className="my-10">
          <BioData />
        </div>
        <div className="dag"></div>

        <div className="my-10 inline-block">
          <HomeButton fromAbout={true} />
        </div>
      </div>

      <div className="pagePadding bg-[#222222]">
        <SkillLoading />
      </div>

      <div className="pagePadding">
        <KnowladgeInterest />
      </div>

      <div className="bg-[#222222] px-5 py-20 ">
        <EducationExperience />
      </div>

      <div className="p-4 md:px-10 md:py-20 ">
        <Testimonial showBox={true} />
      </div>
    </div>
  );
};

export default AboutPage;
