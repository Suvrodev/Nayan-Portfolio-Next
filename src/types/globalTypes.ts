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

export interface TGig {
  name: string;
  price: number;
  concepts: number;
  revisions: number;
  delivery: string;
  features: string[];
  sourceFile: boolean;
  extraDelivery: Record<string, number>;
}

interface GigPackage {
  name: string;
  price: number;
  concepts: number;
  revisions: number;
  delivery: string;
  features: string[];
  sourceFile: boolean;
  extraDelivery: Record<string, number>;
}

export interface TGig {
  title: string;
  seller: {
    name: string;
    rating: number;
    reviews: number;
  };
  about: string;
  experience: string;
  services: string[];
  packages: GigPackage[];
}

export interface GigData {
  _id: string;
  title: string;
  seller: {
    name: string;
    rating: number;
    reviews: number;
  };
  about: string;
  images: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  packages: any[];
}
