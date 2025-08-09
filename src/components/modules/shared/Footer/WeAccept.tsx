import Image from "next/image";
import paypal from "@/app/assets/Accepted/paypal.webp";
import strip from "@/app/assets/Accepted/stripe.webp";
import wise from "@/app/assets/Accepted/wise1.webp";

const WeAccept = () => {
  const paynr = "https://i.ibb.co/qRhpv9K/payoneer-copy.webp";

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-10 text-center md:text-left">
        We Accept
      </h1>
      <div className="flex justify-center md:block ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-4 ">
          <div>
            <Image src={paynr} alt="Payoneer" width={250} height={50} />
          </div>

          <div className="w-full relative">
            <Image src={paypal} alt="PayPal" width={250} height={50} />
          </div>
          <div className="w-full relative">
            <Image src={strip} alt="Stripe" width={250} height={50} />
          </div>

          <Image src={wise} alt="Wise" width={250} height={50} />
        </div>
      </div>
    </div>
  );
};

export default WeAccept;
