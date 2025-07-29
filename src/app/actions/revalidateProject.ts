"use server";

import { revalidateTag } from "next/cache";

export async function revalidateProjects() {
  const tags = ["service", "portfolio", "blog", "gig"];
  tags.forEach((tag) => revalidateTag(tag));

  /**
    revalidateTag("tag1");
    revalidateTag("tag2");
    revalidateTag("tag3");
   */
}
