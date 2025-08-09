import "./Home.css";
import Image from "next/image";
import homeImage from "@/app/assets/homeImage/sarkar_nayan_home.jpg";
import HomeButton from "../HomeButton/HomeButton";
import HomeService from "../HomeService/HomeService";
import Testimonial from "../Testimonial/Testimonial";
import Certificate from "../Certificate/Certificate";
import HomeContact from "../HomeContact/HomeContact";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* <div className="flex justify-center items-center mt-10 md:mt-60 w-full p-4 md:p-0 bg-yellow-400"> */}
      <div className="flex justify-center items-center  w-full p-4 md:px-10 min-h-screen  ">
        {/* <div className="flex justify-center items-center pageMargin bg-green-400"> */}
        <div className="flex flex-col md:flex-row  w-full gap-y-10  ">
          {/* <div className="flex flex-col md:flex-row gap-10"> */}
          <div className="w-full md:w-1/2  ">
            {/* <div
              className="abs_img  border-8 border-[#cccccc] w-[250px] h-[250px] md:w-[350px] md:h-[350px] mx-auto"
              style={divStyle}
            ></div> */}

            <Image
              src={homeImage}
              alt="Sarkar Nayan"
              width={350}
              height={350}
              className="abs_img border-8 border-[#cccccc] mx-auto w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover"
            />
          </div>

          <div className="w-full md:w-1/2  flex flex-col justify-center gap-6 ">
            <h1 className="font-h1 font-bold capitalize text-[2rem] md:text-[3rem] ">
              Sarkar Nayan
            </h1>
            <p className="font-body leading-[1.6]  text-[1rem] md:text-[1.125rem] tracking-[0.025rem]  ">
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
          <Testimonial showBox={false} />
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
