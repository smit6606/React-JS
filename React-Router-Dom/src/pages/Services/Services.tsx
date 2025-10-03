// Service.tsx
import { useEffect } from "react";
import {
  Cog6ToothIcon,
  PencilSquareIcon,
  BanknotesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function Service() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll top on load
  }, []);

  const services = [
    {
      title: "Interior Design",
      desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      icon: Cog6ToothIcon,
    },
    {
      title: "Implementation",
      desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      icon: PencilSquareIcon,
    },
    {
      title: "Renovation",
      desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      icon: BanknotesIcon,
    },
    {
      title: "Commercial Projects",
      desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      icon: UsersIcon,
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <h1 className="text-5xl font-bold animate-slideInLeft">Services</h1>
          <nav className="mt-6 lg:mt-0">
            <ol className="flex space-x-3 text-gray-200">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <span className="text-gray-300">Services</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Creative{" "}
              <span className="bg-gray-100 text-blue-800 px-2 uppercase">
                Services
              </span>
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
              sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet.
            </p>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet.
            </p>

            <div className="flex items-center bg-gray-100 rounded-xl shadow p-4">
              <div className="bg-blue-600 text-white w-20 h-20 flex items-center justify-center rounded-lg">
                <i className="fa fa-phone fa-2x"></i>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">+0123456789</h3>
                <p className="text-gray-600">
                  Call us direct 24/7 for a free consultation
                </p>
              </div>
            </div>
          </div>

          {/* Right Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-start hover:shadow-lg transition-shadow"
              >
                <s.icon className="w-10 h-10 text-blue-800 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
