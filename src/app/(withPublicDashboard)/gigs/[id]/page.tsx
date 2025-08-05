"use client";
import GigDetail from "@/components/Gigs/GigDetail/GigDetail";
import { useParams } from "next/navigation";
import React from "react";

const GigDetailPage = () => {
  const params = useParams();
  const id = params?.id as string;

  return (
    <div>
      <GigDetail id={id} />
    </div>
  );
};

export default GigDetailPage;
