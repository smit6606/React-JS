// Home.tsx
import {
  CheckBadgeIcon,
  Cog6ToothIcon,
  UsersIcon,
  BanknotesIcon,
  PencilSquareIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const heroFeatures = [
    { name: "Crafted Furniture", icon: Cog6ToothIcon },
    { name: "Sustainable Material", icon: BanknotesIcon },
    { name: "Innovative Architects", icon: PencilSquareIcon },
    { name: "Budget Friendly", icon: UsersIcon },
  ];

  const whyChooseUs = [
    { title: "25+ Years Experience", icon: CalendarDaysIcon },
    { title: "Best Interior Design", icon: Cog6ToothIcon },
    { title: "Innovative Architects", icon: PencilSquareIcon },
    { title: "Customer Satisfaction", icon: UsersIcon },
    { title: "Budget Friendly", icon: BanknotesIcon },
    { title: "Sustainable Material", icon: CheckBadgeIcon },
  ];

  const aboutHighlights = [
    "Award Winning",
    "Professional Staff",
    "24/7 Support",
    "Fair Prices",
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-100 pb-16">
        <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-6">
              We Make Your <span className="text-blue-800">Home</span> Better
            </h1>
            <h5 className="inline-block border-2 border-white py-3 px-5 mb-6 text-lg text-gray-700">
              An Award Winning Studio Since 1990
            </h5>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  className="w-full max-w-xs rounded-lg shadow-lg snap-center"
                  src={`/img/hero-slider-${i}.jpg`}
                  alt={`Slider ${i}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hero Features */}
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12">
          {heroFeatures.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
            >
              <div className="bg-white text-blue-800 p-4 rounded-lg shadow">
                <item.icon className="w-8 h-8 mx-auto" />
              </div>
              <h5 className="font-medium">{item.name}</h5>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="lg:flex lg:gap-12 items-center">
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img
              src="/img/about-1.jpg"
              alt="About 1"
              className="rounded-lg shadow-lg"
            />
            <div className="flex flex-col h-full">
              <img
                src="/img/about-2.jpg"
                alt="About 2"
                className="h-3/4 rounded-lg shadow-lg"
              />
              <div className="h-1/4 bg-blue-600 flex items-center justify-center rounded-lg mt-2">
                <h4 className="text-white font-semibold">
                  Award Winning Studio Since 1990
                </h4>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-blue-800 bg-gray-100 px-2 uppercase">
                History
              </span>{" "}
              of Our Creation
            </h2>
            <p className="mb-4 text-gray-600">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore.
            </p>
            <p className="mb-6 text-gray-600">
              Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
              Sanctus clita duo justo et tempor.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {aboutHighlights.map((text) => (
                <h6
                  key={text}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <CheckBadgeIcon className="w-6 h-6 text-blue-800" /> {text}
                </h6>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Why People{" "}
            <span className="text-blue-800 uppercase bg-gray-100 px-2">
              Choose Us
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
              >
                <item.icon className="w-12 h-12 text-blue-800 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">
                  Clita erat ipsum et lorem et sit, sed stet no labore lorem
                  sit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
