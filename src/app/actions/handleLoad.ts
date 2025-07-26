import { startTransition } from "react";
import { revalidateProjects } from "./revalidateProject";

export const handleLoad = async () => {
  startTransition(async () => {
    await revalidateProjects();
  });
};
