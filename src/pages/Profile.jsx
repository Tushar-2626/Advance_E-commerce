import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div><strong>Name:</strong> {user?.name}</div>
      <div className="mt-2"><strong>Email:</strong> {user?.email}</div>
      <div className="mt-2 text-sm text-gray-500">Token (mock): {user?.token}</div>
    </div>
  );
}
