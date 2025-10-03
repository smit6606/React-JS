// Project.tsx
import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll top on mount
  }, []);

  const projects = [
    {
      id: 1,
      title: "Kitchen",
      count: "72 Projects",
      image: "/img/project-1.jpg",
    },
    {
      id: 2,
      title: "Bathroom",
      count: "67 Projects",
      image: "/img/project-2.jpg",
    },
    {
      id: 3,
      title: "Bedroom",
      count: "53 Projects",
      image: "/img/project-3.jpg",
    },
    {
      id: 4,
      title: "Living Room",
      count: "33 Projects",
      image: "/img/project-4.jpg",
    },
    {
      id: 5,
      title: "Furniture",
      count: "87 Projects",
      image: "/img/project-5.jpg",
    },
    {
      id: 6,
      title: "Renovation",
      count: "69 Projects",
      image: "/img/project-6.jpg",
    },
  ];

  const testimonials = [
    {
      id: 1,
      title: "Sustainable Material",
      text: "Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.",
      author: "Boris Johnson",
      image: "/img/testimonial-1.jpg",
    },
    {
      id: 2,
      title: "Customer Satisfaction",
      text: "Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod.",
      author: "Alexander Bell",
      image: "/img/testimonial-2.jpg",
    },
    {
      id: 3,
      title: "Budget Friendly",
      text: "Diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.",
      author: "Bradley Gordon",
      image: "/img/testimonial-3.jpg",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <h1 className="text-5xl font-bold animate-slideInLeft">Projects</h1>
          <nav className="mt-6 lg:mt-0">
            <ol className="flex space-x-3 text-gray-200">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <span className="text-gray-300">Projects</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Panel */}
          <div className="lg:col-span-5 flex flex-col justify-center bg-blue-600 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold mb-6">
              Our Latest{" "}
              <span className="bg-white text-blue-800 px-2 uppercase">
                Projects
              </span>
            </h2>
            <h4 className="text-lg">
              <span className="text-5xl font-extrabold">6</span> of our latest
              projects
            </h4>
          </div>

          {/* Right Project Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.id}
                className="relative overflow-hidden rounded-xl shadow-lg group"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition"
                />
                <a
                  href="#!"
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition"
                >
                  <h4 className="text-white text-xl font-semibold">
                    {p.title}
                  </h4>
                  <small className="text-gray-200">{p.count}</small>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{t.title}</h3>
                  <p className="text-gray-600 mb-4">{t.text}</p>
                  <h5 className="font-bold">{t.author}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto grid md:grid-cols-2 items-center">
          <img
            src="/img/newsletter.jpg"
            alt="Newsletter"
            className="w-full h-full object-cover hidden md:block"
          />
          <div className="p-10">
            <h2 className="text-4xl font-bold mb-6">
              Subscribe the{" "}
              <span className="bg-white text-blue-800 uppercase px-2">
                Newsletter
              </span>
            </h2>
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full h-14 rounded-lg px-4 text-gray-800 outline-none"
              />
              <button className="absolute right-3 top-2.5 bg-white text-blue-800 rounded-md px-3 py-2 shadow">
                <i className="fa fa-paper-plane"></i>
              </button>
            </div>
            <p className="mb-0">Diam sed sed dolor stet amet eirmod</p>
          </div>
        </div>
      </section>
    </div>
  );
}
