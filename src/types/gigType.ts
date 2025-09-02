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
  tabBody: string;
  tableFeatures: TPackageFeature[];
  tabFeatures: TPackageFeature[];
};

export interface IGig {
  _id: string;
  title: string;
  seller: TSeller; // 👈 এখানে seller nested থাকবে
  description: string;
  about: string;
  images: string[];
  packages: TPackage[];
}
