import { navItems } from "@/components/utils/Array/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MobileHeaderOption = ({ handleClick }: any) => {
  const path = usePathname();

  return (
    <div className="primaryBox   text-white flex flex-col gap-4 px-5 py-5 relative z-10 shadow-2xl">
      {/* Navigation Links */}
      <div className="flex flex-col gap-4 font-bold w-full">
        {navItems.map((data, idx) => (
          <Link
            href={`${data?.path}`}
            key={idx}
            onClick={() => handleClick(false)}
            className={`text-[16px] font-semibold cursor-pointer transition-all duration-300 hover:text-teal-300 ${
              data?.path === path ? "text-teal-300" : "text-white"
            }`}
          >
            {data?.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileHeaderOption;
