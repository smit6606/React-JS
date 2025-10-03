// Contact.tsx
import { useEffect, useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll top on mount
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully (demo only).");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <h1 className="text-5xl font-bold animate-slideInLeft">Contact</h1>
          <nav className="mt-6 lg:mt-0">
            <ol className="flex space-x-3 text-gray-200">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <span className="text-gray-300">Contact</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 container mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold mb-4">
            Get in{" "}
            <span className="bg-gray-100 text-blue-800 px-2 uppercase">
              Touch
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We'd love to hear from you. Reach out for inquiries, quotes, or just
            to say hello. Our team is ready to assist 24/7.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <PhoneIcon className="w-8 h-8 text-blue-800" />
              <div>
                <h4 className="font-semibold">+0123456789</h4>
                <p className="text-gray-600">
                  Call us 24/7 for a free consultation
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <EnvelopeIcon className="w-8 h-8 text-blue-800" />
              <div>
                <h4 className="font-semibold">info@example.com</h4>
                <p className="text-gray-600">We reply within 24 hours</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPinIcon className="w-8 h-8 text-blue-800" />
              <div>
                <h4 className="font-semibold">Our Office</h4>
                <p className="text-gray-600">123 Street, City, Country</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Leave a message here"
                rows={5}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 transition"
            >
              Send Message
            </button>
          </form>
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
