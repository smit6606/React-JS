// About.tsx
import { useEffect } from "react";
import {
  CheckBadgeIcon,
  Cog6ToothIcon,
  UsersIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll top on page load
  }, []);

  const aboutHighlights = [
    "Award Winning",
    "Professional Staff",
    "24/7 Support",
    "Fair Prices",
  ];

  const aboutFeatures = [
    { title: "Expert Architects", icon: Cog6ToothIcon },
    { title: "Customer Satisfaction", icon: UsersIcon },
    { title: "Budget Friendly", icon: BanknotesIcon },
    { title: "Sustainable Material", icon: CheckBadgeIcon },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <h1 className="text-5xl font-bold animate-slideInLeft">About Us</h1>
          <nav className="mt-6 lg:mt-0">
            <ol className="flex space-x-3 text-gray-200">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <span className="text-gray-300">About</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="lg:flex lg:gap-12 items-center">
          {/* Left Images */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img
              src="/img/about-1.jpg"
              alt="About 1"
              className="rounded-lg shadow-lg"
            />
            <div className="flex flex-col h-full gap-4">
              <img
                src="/img/about-2.jpg"
                alt="About 2"
                className="rounded-lg shadow-lg h-3/4 object-cover"
              />
              <div className="bg-blue-600 flex items-center justify-center rounded-lg h-1/4 p-4 text-center">
                <h4 className="text-white font-semibold">
                  Award Winning Studio Since 1990
                </h4>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-blue-800 bg-gray-100 px-2 uppercase">
                History
              </span>{" "}
              of Our Creation
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet.
            </p>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
              sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {aboutHighlights.map((text) => (
                <h6
                  key={text}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <CheckBadgeIcon className="w-6 h-6 text-blue-800" /> {text}
                </h6>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {aboutFeatures.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-100 p-4 rounded-lg flex items-center gap-3 hover:scale-105 transition-transform"
                >
                  <item.icon className="w-8 h-8 text-blue-800" />
                  <span className="font-medium text-gray-800">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="#!"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-500 transition"
              >
                Read More
              </a>
              <div className="flex gap-3">
                {["facebook-f", "twitter", "instagram", "linkedin-in"].map(
                  (icon) => (
                    <a
                      key={icon}
                      href="#!"
                      className="p-2 border-2 border-blue-600 rounded-full text-blue-800 hover:bg-blue-600 hover:text-white transition"
                    >
                      <i className={`fab fa-${icon}`}></i>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
