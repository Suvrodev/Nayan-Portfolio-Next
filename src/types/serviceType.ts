export type TUpdateService = {
  id: string;
  title?: string;
  hero?: {
    headline?: string;
    text1?: string;
    text2?: string;
  };
  keyAspect?: {
    tutle?: string;
    title?: string;
    keyAspect?: { title?: string; desc?: string }[];
  };
  skillLogo?: {
    title?: string;
    images?: string[];
  };
  skils?: {
    title?: string;
    pg?: string;
    skills?: { title?: string; desc?: string }[];
  };
};
