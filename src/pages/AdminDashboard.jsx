import { useState } from "react";
// Sample user data
const users = [
  {
    id: "u1",
    name: "Alice Johnson",
    email: "alice@example.com",
    lastLogin: "2025-07-31 18:20",
    isActive: true,
  },
  {
    id: "u2",
    name: "Bob Smith",
    email: "bob@example.com",
    lastLogin: "2025-07-28 14:00",
    isActive: false,
  },
  // Add more demo users here
];

export default function AdminDashboard() {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-950">Admin Dashboard</h1>
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-xl font-semibold mb-6">All Users & Activity</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full max-w-xs border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-md text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 font-semibold">Name</th>
                <th className="p-3 font-semibold">Email</th>
                <th className="p-3 font-semibold">Last Login</th>
                <th className="p-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-6 text-center text-gray-400">No users found.</td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="border-t hover:bg-gray-50">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.lastLogin}</td>
                    <td className="p-3">
                      <span className={
                        user.isActive
                          ? "inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                          : "inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-600"
                      }>
                        {user.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Add more admin tools here, like user actions, analytics, etc. */}
    </div>
  );
}
