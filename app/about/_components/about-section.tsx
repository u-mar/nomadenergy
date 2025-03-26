import Image from "next/image";
import Link from "next/link";
import { oswald } from "@/app/fonts";

export default function AboutSection() {
  const services = [
    {
      number: "01",
      title: "Residential Solar Solutions",
      description:
        "Grid-tied solar power systems, off-grid solar systems, solar water heating solutions and energy-efficient appliances",
      color: "bg-[#f7f7f8]",
    },
    {
      number: "02",
      title: "Commercial and Industrial Solar Solutions",
      description: "Grid-tied solar power systems and energy audits and consultancy.",
      color: "bg-white",
    },
    {
      number: "03",
      title: "Agricultural Solutions",
      description:
        "Solar-powered irrigation systems, solar water pumps, and energy-efficient tools to enhance farming operations and reduce energy costs.",
      color: "bg-[#f7f7f8]",
    },
    {
      number: "04",
      title: "Community Projects",
      description:
        "Implementing solar microgrids for rural electrification and educational programs on solar energy and sustainability.",
      color: "bg-white",
    },
    {
      number: "05",
      title: "Maintenance and Support",
      description:
        "Comprehensive maintenance services to ensure optimal performance and customer support for any solar-related issues",
      color: "bg-[#f7f7f8]",
    },
    {
      number: "06",
      title: "Agricultural Equipment Supply",
      description:
        "Providing essential farming tools like brush cutters, hedge trimmers, and earth augers to help farmers improve productivity with reliable, sustainable equipment.",
      color: "bg-white",
    },
  ];

  return (
    <div className="w-full bg-white">
      <section className="container mx-auto px-4 py-16 md:px-6">
        <h1
          className={`my-20 text-4xl text-center font-bold text-[#1e3a8a] md:text-4xl lg:text-5xl ${oswald.className}`}
        >
          About Us
        </h1>

        <div className="grid gap-12">
          {/* About Us Section */}
          <div className="grid gap-8 lg:grid-cols-2 mx-28">
            <div className="space-y-8">
              <div>
                <h2 className={`mb-6 text-6xl font-bold  ${oswald.className}`}>About Us.</h2>
                <p className="text-lg text-gray-700 border-l-4 border-[#000000] pl-4">
                  Nomad Energy, a socially responsible solar enterprise based in Garowe, Somalia, is
                  dedicated to empowering local farmers with reliable tools and customized solutions.
                  With deep expertise in solar energy, we provide sustainable power systems for
                  climate-affected villages, towns, cities, socially responsible enterprises, and
                  residential street lighting—driving growth, resilience, and innovation across the
                  region.
                </p>
              </div>
              <div>
                <h2 className={`mb-6 text-6xl font-bold ${oswald.className} `}>Our Mission.</h2>
                <p className="text-lg text-gray-700 border-l-4 border-[#000000] pl-4">
                  We aim to illuminate streets in towns, cities, and villages to enhance security.
                  Through renewable energy, we extract water from boreholes to support farmers while
                  enabling socially responsible enterprises to harness solar power. By leveraging
                  solar energy, we provide reliable solutions that improve daily life, strengthen
                  security, and empower businesses. Our focus is on delivering innovative solar
                  systems and agricultural tools, helping communities thrive sustainably and
                  efficiently.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <Image
                src="/images/about.png"
                alt="Solar panel installation on a red roof"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Key Services Section */}
          <div className="space-y-8 mt-28 mx-24">
            <h2 className={`text-center text-6xl font-bold ${oswald.className}`}>Key Services</h2>
            <p className="mx-auto max-w-3xl text-center text-lg text-gray-700">
              We specialize in supporting socially responsible businesses by providing residential,
              commercial, and industrial solar solutions, as well as agricultural systems and
              community projects. Our commitment includes reliable maintenance and ongoing support,
              ensuring long-term sustainability and efficiency.
            </p>
            <div className="grid gap-6">
              {/* First row - 3 items */}
              <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                {services.slice(0, 3).map((service) => (
                  <div key={service.number} className={`p-6 ${service.color} rounded-lg`}>
                    <div className="mb-4 text-2xl font-normal text-[#1e3a8a]">{service.number}</div>
                    <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
              {/* Second row - 2 items */}
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                {services.slice(3, 5).map((service) => (
                  <div key={service.number} className={`p-6 ${service.color} rounded-lg`}>
                    <div className="mb-4 text-2xl font-normal text-[#1e3a8a]">{service.number}</div>
                    <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
              {/* Third row - 1 item */}
              <div className="grid gap-6">
                {services.slice(5, 6).map((service) => (
                  <div key={service.number} className={`p-6 ${service.color} rounded-lg`}>
                    <div className="mb-4 text-2xl font-normal text-[#1e3a8a]">{service.number}</div>
                    <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
