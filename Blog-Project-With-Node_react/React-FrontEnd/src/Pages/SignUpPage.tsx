import { useState } from "react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-gray-900 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000"
          alt="Sign Up Illustration"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-12">
          <h1 className="text-5xl font-bold mb-4 animate-fadeInDown">
            Join Our Community ✍️
          </h1>
          <p className="text-lg text-gray-300 animate-fadeInUp">
            Start sharing your thoughts, blogs, and creative ideas with readers
            worldwide.
          </p>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-8 py-16">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-gray-900 mb-2 tracking-tight">
              Create Account
            </h2>
            <p className="text-gray-500">
              Join thousands of writers and thinkers
            </p>
          </div>

          <form className="space-y-6 mt-8">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 text-gray-500 hover:text-gray-900"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition-transform transform hover:scale-[1.02] font-semibold shadow-lg"
            >
              Sign Up
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-gray-900 font-medium hover:underline"
              >
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
