export type TSkillAndTool = {
  title: string;
  percent: number;
};

export type TService = {
  _id: string;
  title: string;
  image: string;
  shortDescription: string;
  description: string;
  skillAndTools: TSkillAndTool[];
  order: number;
};

export type TPortfolio = {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  link: string;
};

export type TBlog = {
  _id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  author: string;
  date: Date | string;
};

export type TTestimonial = {
  id: string;
  image: string;
  desc: string;
  name: string;
  position: string;
  rating: number;
};
export type TFun = {
  number: number;
  title: string;
  botText: string;
};

export type TEducation = {
  year: string;
  institute: string;
  topic: string;
};

export type TAdmin = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isBlocked: boolean;
  phone: string;
  image: string;
};

export type TGig = {
  _id: string;
  title: string;
  seller: {
    name: string;
    rating: number;
    reviews: number;
  };
  about: string;
  experience: string;
  images: string[];
  packages: TGigPackage[];
};

export type TGigPackage = {
  name: "Basic" | "Standard" | "Premium";
  price: number;
  concepts: number;
  revisions: number;
  delivery: number | string;
  printReady: boolean;
  sourceFile: boolean;
  doubleSided: boolean;
  extraDelivery: Record<string, number>; // e.g., { "1 day": 10 }
  concept: string;
  formate: string;
  features: TGigFeature[];
};

export type TGigFeature = {
  feature: string;
  name: string;
  isEnable: boolean;
};
