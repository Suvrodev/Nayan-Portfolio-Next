import Link from "next/link";
import "./Consult.css";
const Consult = () => {
  return (
    <div className="imageBox flex items-center justify-center text-white">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl md:text-4xl font-bold text-white">
          Get a Free Consultation For
        </h2>
        <h2 className="text-4xl font-bold text-white mb-10">Next Project</h2>
        <Link href={"/contact"}>
          {" "}
          {/* <button className=" py-4 px-6 md:btn-lg bg-white font-bold text-black border-0 rounded-none hover:bg-white cursor-pointer "> */}
          <button className="primaryButton py-4 px-6 md:btn-lg  font-bold text-black border-0 rounded-none hover:bg-white cursor-pointer ">
            Contact Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Consult;
