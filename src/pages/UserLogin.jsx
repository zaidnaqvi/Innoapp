import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in both email and password.");
      return;
    }

    // TODO: Implement actual login logic/API here
    console.log("User login attempted:", { email, password });
    alert(`Logged in as user: ${email}`);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 flex flex-col md:flex-row items-center justify-center px-6 py-12">
      {/* Illustration Section */}
      <div className="hidden md:flex md:w-1/2 max-w-lg rounded-xl overflow-hidden shadow-lg mr-12">
        <img
          src={img1}
          alt="Motivational study or success background"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Login Form Section */}
      <div className="w-full max-w-md bg-white rounded-xl border shadow-2xl p-10 mx-auto md:mx-0">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8 tracking-tight">
          User Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition"
            />
          </div>

          {error && (
            <p className="text-red-600 text-center text-sm font-medium mt-1">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-4 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign In
          </button>
        </form>

        {/* Forgot Password Link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Forgot your password?{" "}
          <Link
            to="/forgot-password"
            className="text-indigo-600 hover:text-indigo-800 font-semibold"
          >
            Reset it here
          </Link>
        </p>

        {/* New User Registration Prompt */}
        <p className="mt-6 text-center text-sm text-gray-700">
          New here?{" "}
          <Link
            to="/register"
            className="text-indigo-600 hover:text-indigo-800 font-semibold"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
