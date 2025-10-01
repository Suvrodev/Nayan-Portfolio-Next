// Hero Section
export type THero = {
  headline?: string;
  text1?: string;
  text2?: string;
};

// Key Aspect Section
export type TKeyAspectItem = {
  title?: string;
  desc?: string;
};

export type TKeyAspect = {
  title?: string;
  keyAspects?: TKeyAspectItem[];
};

// Skill Logo Section
export type TSkillLogo = {
  title?: string;
  images?: string[];
};

// Skills Section
export type TSkillItem = {
  title?: string;
  desc?: string;
};

export type TSkills = {
  title?: string;
  pg?: string;
  skills?: TSkillItem[];
};

// Main Update Service Type
export type TUpdateService = {
  id: string;
  title?: string;
  hero?: THero;
  keyAspect?: TKeyAspect;
  skillLogo?: TSkillLogo;
  skils?: TSkills;
};
