// export interface Package {
//   name: string; // e.g. "Basic", "Standard", "Premium"
//   price: number; // e.g. 20
//   concepts: number; // কতগুলো concept design
//   revisions: number | "Unlimited"; // সংখ্যা বা "Unlimited"
//   delivery: number; // কত দিনে delivery হবে (in days)
//   concept: string; // description line e.g. "2 BUSINESS CARD Concepts"
//   format: string; // e.g. "300dpi CMYK + JPG, PDF"
//   tabBody: string; // ছোট summary টেক্সট
//   tableFeatures: {
//     feature: string;
//     isEnable?: boolean; // true/false feature
//     text?: string; // যদি extra value লাগে (e.g. "2", "Unlimited", "2 days")
//   }[];
//   tabFeatures: {
//     feature: string;
//     isEnable: boolean;
//   }[];
// }

// export interface IGig {
//   _id: string;
//   gigId: string;
//   title: string;
//   category: string;
//   images: string[];
//   packages: Package[];
// }

type TSeller = {
  name: string;
  rating: number;
  reviews: number;
};

type TPackageFeature = {
  feature: string;
  isEnable?: boolean; // true/false হলে
  text?: string; // সংখ্যার মত data হলে
};

type TPackage = {
  name: "Basic" | "Standard" | "Premium";
  price: number;
  concepts: number;
  revisions: number | "Unlimited";
  delivery: number; // দিন হিসেবে
  tableConcept: string;
  format: string;
  tabBody: string;
  tableFeatures: TPackageFeature[];
  tabFeatures: TPackageFeature[];
};

export interface IGig {
  _id: string;
  title: string;
  seller: TSeller; // 👈 এখানে seller nested থাকবে
  description: string;
  category: string;
  images: string[];
  packages: TPackage[];
}
