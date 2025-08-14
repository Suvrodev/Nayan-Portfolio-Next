// "use client";
// import { portfolioCategories } from "@/components/utils/Array/portfolioCategories";
// import { selectPortfolioCategory } from "@/redux/features/PortfolioApi/portfolioSlice";
// import { useEffect, useRef, useState } from "react";
// import { useDispatch } from "react-redux";

// const PortfolioTabEZ = () => {
//   const dispatch = useDispatch();
//   const [activeTab, setActiveTab] = useState("All");
//   const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

//   const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

//   useEffect(() => {
//     const index = portfolioCategories.indexOf(activeTab);
//     const currentTab = tabRefs.current[index];
//     if (currentTab) {
//       const { offsetLeft, offsetWidth } = currentTab;
//       setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
//     }
//   }, [activeTab]);
//   return (
//     <div className="w-full flex justify-center">
//       <div className="relative inline-flex items-center gap-1 bg-[#2c2f36] rounded-full px-2 py-2">
//         {portfolioCategories.map((item, index) => (
//           <button
//             key={item}
//             // eslint-disable-next-line @typescript-eslint/no-explicit-any
//             ref={(el: any) => (tabRefs.current[index] = el)}
//             onClick={() => {
//               setActiveTab(item);
//               dispatch(selectPortfolioCategory(item));
//             }}
//             className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
//               activeTab === item ? "text-white" : "text-gray-300"
//             }`}
//           >
//             {item}
//           </button>
//         ))}

//         {/* Animated Background Circle */}
//         <span
//           className="absolute z-0 h-8 bg-blue-600 rounded-full transition-all duration-300"
//           style={{
//             left: underlineStyle.left,
//             width: underlineStyle.width,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default PortfolioTabEZ;

"use client";
import { portfolioCategories } from "@/components/utils/Array/portfolioCategories";
import { selectPortfolioCategory } from "@/redux/features/PortfolioApi/portfolioSlice";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useAppSelector } from "@/redux/hook";

const PortfolioTabEZ = () => {
  const { portfolioCategory } = useAppSelector(
    (state) => state?.portfolioCategories
  );
  // console.log("Stable Category: ", portfolioCategory);

  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(portfolioCategory);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Move scroll on left/right button click
  const scrollTabs = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 150;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Animate the underline
  useEffect(() => {
    const index = portfolioCategories.indexOf(activeTab);
    const currentTab = tabRefs.current[index];
    if (currentTab) {
      const { offsetLeft, offsetWidth } = currentTab;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <div className="w-10/12 md:w-9/12 mx-auto flex justify-center px-4 relative">
      {/* Desktop and Mobile Container */}
      <div className="relative w-full max-w-4xl">
        {/* Scroll Buttons (Mobile only) */}
        <button
          className="absolute -left-10 top-1/2 -translate-y-1/2 bg-[#2c2f36] text-white p-2 rounded-full z-20 md:hidden"
          onClick={() => scrollTabs("left")}
        >
          <FaChevronLeft />
        </button>

        <div
          className="relative flex gap-1 overflow-x-auto no-scrollbar bg-[#2c2f36] rounded-full px-2 py-2 md:justify-center md:overflow-visible"
          ref={scrollContainerRef}
        >
          {portfolioCategories.map((item, index) => (
            <button
              key={item}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              onClick={() => {
                setActiveTab(item);
                dispatch(selectPortfolioCategory(item));
              }}
              className={`relative z-10 px-4 py-2 text-sm whitespace-nowrap font-medium rounded-full transition-all duration-300 ${
                activeTab === item ? "text-white" : "text-gray-300"
              }`}
            >
              {item}
            </button>
          ))}

          {/* Animated underline background */}
          <span
            className="absolute z-0 h-9  bg-[#292929] flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </div>

        <button
          className="absolute -right-10 top-1/2 -translate-y-1/2 bg-[#2c2f36] text-white p-2 rounded-full z-20 md:hidden"
          onClick={() => scrollTabs("right")}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PortfolioTabEZ;
