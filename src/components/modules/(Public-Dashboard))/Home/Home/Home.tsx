import "./Home.css";
import Image from "next/image";
import homeImage from "@/app/assets/homeImage/homeImage.jpg";
import HomeButton from "../HomeButton/HomeButton";
import HomeService from "../HomeService/HomeService";
import Certificate from "../Certificate/Certificate";
import HomeContact from "../HomeContact/HomeContact";
import TestimonialMx from "../Testimonial/TestimonialMx";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative flex justify-center items-center  w-full p-4 md:px-10 min-h-screen  ">
        <div
          className="absolute inset-0 -z-30 opacity-[0.03] bg-no-repeat bg-center bg-cover"
          // style={{
          //   backgroundImage:
          //     "url('https://ezycourse.b-cdn.net/5115/cmeral9kn014ejw8z4ildddbk.svg')",
          // }}
        ></div>

        <div className="flex flex-col items-center justify-center w-full gap-y-10   ">
          <div className="w-full  ">
            <Image
              src={homeImage}
              alt="Sarkar Nayan"
              width={350}
              height={350}
              className="abs_img border-8 border-[#cccccc] mx-auto w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover"
            />
          </div>

          <div className="w-full md:w-[80%]   flex flex-col justify-center items-center mb-[16px] sarkarTitle  ">
            <h1 className="font-h1 font-bold capitalize text-[2rem] md:text-[3rem] ">
              Sarkar Nayan
            </h1>
            <p className="font-body leading-[1.6]  text-[1rem] md:text-[1.125rem] tracking-[0.025rem] snd text-center">
              Highly motivated and detail-oriented Web Developer with a
              Bachelor&#39;s degree in Computer Science and Engineering for 4
              years. Proficient in <span className=" highLight ">PHP</span>,
              with a deep understanding of the Laravel framework. Seeking to
              leverage my technical skills and passion for web development to
              provide high-quality, user-centric solutions in a challenging
              role. Committed to producing high-quality, innovative, and
              scalable code to drive the success of your team and projects.
            </p>

            <div className="flex gap-4 items-center">
              <HomeButton />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {/* <div className=" w-full  mx-auto flex flex-col gap-20 p-4 md:px-[200px] md:pt-0 md:pb-28 "> */}
        <div className="pPadding ">
          <HomeService />
        </div>
        <div className="pPadding bg-[#141414]">
          <TestimonialMx />
        </div>
        <div className="pPadding ">
          <Certificate />
        </div>
        <div className="pPadding bg-[#141414]">
          <HomeContact />
        </div>
      </div>
    </div>
  );
};

export default Home;
