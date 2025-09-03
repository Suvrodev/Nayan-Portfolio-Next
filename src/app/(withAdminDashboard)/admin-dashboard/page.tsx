"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminDashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin-dashboard/home");
  }, [router]);

  return null; // kono content dekhabo na karon redirect hobe
};

export default AdminDashboardPage;
