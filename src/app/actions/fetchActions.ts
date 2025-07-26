export const fetchServices = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/services`, {
    next: {
      revalidate: 5,
      tags: ["service"],
    },
  });

  if (!res.ok) throw new Error("Failed to fetch services");

  return res.json();
};

export const fetchPortfolio = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API2}/portfolioo`, {
    next: {
      revalidate: 5,
      tags: ["portfolio"],
    },
  });

  if (!res.ok) throw new Error("Failed to fetch Portfolio");

  return res.json();
};
