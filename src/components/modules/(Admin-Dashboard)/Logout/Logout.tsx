"use client";
import { FaSignOutAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { clearTokenAction } from "@/components/utils/hook/AuthService/getCurrentUser";
// import { protectedRoutes } from "@/constant";

const Logout = () => {
  const pathName = usePathname();
  // const router = useRouter();
  console.log("Path name from Logout: ", pathName);
  const handleClearToken = async () => {
    console.log("Clearing token...");
    await clearTokenAction();

    // router.push("/");

    // if (protectedRoutes.some((route) => pathName.match(route))) {
    //   router.push("/");
    // }

    // console.log("Protected Route: ", protectedRoutes);
  };

  return (
    <div className="mt-8">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition duration-300 shadow-md hover:shadow-lg"
        onClick={() => handleClearToken()}
      >
        <FaSignOutAlt className="text-lg" />
        Logout
      </button>
    </div>
  );
};

export default Logout;
