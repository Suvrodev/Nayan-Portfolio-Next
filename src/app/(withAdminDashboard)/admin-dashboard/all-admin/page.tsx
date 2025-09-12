import AdminTable from "@/components/modules/(Admin-Dashboard)/AllAdmin/AdminTable/AdminTable";
import { baseApiFromEnv } from "@/components/utils/functions/baseApiFromenv";
import { TAdmin } from "@/types/globalTypes";
import React from "react";

const AllAdminPage = async () => {
  const res = await fetch(`${baseApiFromEnv()}/auth/all-admin`, {
    next: {
      revalidate: 1,
      tags: ["Admin"],
    },
  });
  const data = await res.json();
  const admins = data?.data;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Admins</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-700">
          <thead className="">
            <tr>
              <th className="px-4 py-2 border border-gray-700">#</th>
              <th className="px-4 py-2 border border-gray-700">Name</th>
              <th className="px-4 py-2 border border-gray-700">Email</th>
              <th className="px-4 py-2 border border-gray-700">Phone</th>
              <th className="px-4 py-2 border border-gray-700">Role</th>
              <th className="px-4 py-2 border border-gray-700">Block</th>
              <th className="px-4 py-2 border border-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {admins?.map((admin: TAdmin, index: number) => (
              <AdminTable key={index} admin={admin} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAdminPage;
