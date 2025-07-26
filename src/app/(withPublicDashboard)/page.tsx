import Image from "next/image";
import "./Home.css";
import homeImage from "@/app/assets/homeImage/sarkar_nayan_home.jpg";
import HomeService from "@/components/modules/Home/HomeService/HomeService";
import HomeButton from "@/components/modules/Home/HomeButton/HomeButton";

const HomePage = () => {
  //   const divStyle = {
  //     backgroundImage: `url(${homeImage})`,
  //     backgroundSize: "cover",
  //     backgroundPosition: "center",
  //   };
  return (
    <div className="overflow-hidden">
      {/* <div className="flex justify-center items-center mt-10 md:mt-60 w-full p-4 md:p-0 bg-yellow-400"> */}
      <div className="flex justify-center items-center pagePadding w-full p-4 md:p-0 min-h-screen ">
        {/* <div className="flex justify-center items-center pageMargin bg-green-400"> */}
        <div className="flex flex-col md:flex-row  w-full ">
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
            <h1 className="font-h1 font-bold uppercase">Sarkar Nayan</h1>
            <p className="font-body  leading-[30px]">
              Highly motivated and detail-oriented Web Developer with a
              Bachelor&#39;s degree in Computer Science and Engineering for 4
              years. Proficient in PHP, with a deep understanding of the Laravel
              framework. Seeking to leverage my technical skills and passion for
              web development to provide high-quality, user-centric solutions in
              a challenging role. Committed to producing high-quality,
              innovative, and scalable code to drive the success of your team
              and projects.
            </p>

            <div className="flex gap-4 items-center">
              <HomeButton />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="my-28 w-full  mx-auto flex flex-col gap-20 p-4 md:px-[200px] md:py-28 ">
          <HomeService />
        </div>
        <div className="p-4 md:px-10 md:py-20 bg-[#141414] ">
          {/* <Testimonial showBox={false} /> */}
        </div>
        <div className="p-4 md:px-10 md:py-20  ">{/* <Certificate /> */}</div>
        <div className="p-4 md:px-[220px] md:py-20 bg-[#141414] ">
          {/* <HomeContact /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
