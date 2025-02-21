"use client";

import Image from "next/image";
import Link from "next/link";
import { oswald } from "@/app/fonts"; // assumes custom class

// EnergyFeatures Section component
function EnergyFeatures() {
  return (
    <section className="energy-features w-full bg-gray-50 py-12">
      <h1 className="ef-heading text-center text-4xl md:text-5xl font-oswald font-bold mb-8">
        One Solution. Endless Energy.
      </h1>
      <div className="ef-features flex flex-wrap justify-center gap-8 mb-8">
        <div className="ef-feature max-w-sm text-left pt-4 border-t-2 border-gray-300">
          <h2 className="text-0.4xl font-oswald font-bold mb-3">
            Shade analysis software
          </h2>
          <p className="text-base font-raleway leading-relaxed">
            We use advanced shade analysis software in our solar array design to ensure optimal panel placement and maximize energy production, even in shaded conditions.
          </p>
        </div>
        <div className="ef-feature max-w-sm text-left pt-4 border-t-2 border-gray-300">
          <h2 className="text-0.4xl font-oswald font-bold mb-3">
            Array siting software
          </h2>
          <p className="text-base font-raleway leading-relaxed">
            We use state-of-the-art array siting software to determine optimal locations for solar installations. This ensures maximum energy production and long-term system efficiency.
          </p>
        </div>
        <div className="ef-feature max-w-sm text-left pt-4 border-t-2 border-gray-300">
          <h2 className="text-0.4xl font-oswald font-bold mb-3">
            REMOTE MONITORING &amp; MAINTENANCE
          </h2>
          <p className="text-base font-raleway leading-relaxed">
            We provide remote monitoring, monthly reporting, and service and maintenance for all our installations.
          </p>
        </div>
      </div>
      <div className="text-center">
        <Link
          href="/contact"
          className="ef-btn inline-block bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-raleway font-medium hover:brightness-95 transition"
        >
          Contact Us
        </Link>
      </div>
      <style jsx>{`
        .energy-features {
          max-width: 100%;
          margin: 0;
          text-align: center;
          padding: 3rem 0;
          background-color: #f7f7f8;
          color: #1d1d22;
        }
      `}</style>
    </section>
  );
}

export default function ServiceSection() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full mb-16 text-center">
        <h1
          className={`my-28 text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B3B75] ${oswald.className}`}
        >
          Solar Services
        </h1>
        <Image
          src="/images/nomad.jpg"
          height={500}
          width={600}
          alt="Nomad Energy"
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* We Offer Section */}
      <section className="w-full px-12 py-16">
        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          <h2 className="text-5xl font-bold text-[#1E3B8C] font-oswald">
            We offer
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-oswald" style={{ fontSize: "17px" }}>
                  Residential Solar Solutions:
                </h3>
                <ul className="space-y-2 text-gray-700 font-raleway text-base">
                  <li>Grid-tied solar power systems.</li>
                  <li>Off-grid solar systems.</li>
                  <li>Solar water heating solutions.</li>
                  <li>Energy-efficient appliances</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-oswald" style={{ fontSize: "17px" }}>
                  Commercial and Industrial Solar Solutions:
                </h3>
                <ul className="space-y-2 text-gray-700 font-raleway text-base">
                  <li>Grid-tied solar power systems.</li>
                  <li>Energy audits and consultancy.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-oswald" style={{ fontSize: "17px" }}>
                  Agricultural Solutions:
                </h3>
                <ul className="space-y-2 text-gray-700 font-raleway text-base">
                  <li>Solar-Powered water pumping solutions</li>
                  <li>Renewable energy solutions for agribusinesses</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-oswald" style={{ fontSize: "17px" }}>
                  Community Projects
                </h3>
                <ul className="space-y-2 text-gray-700 font-raleway text-base">
                  <li>Implementing solar microgrids for rural electrification.</li>
                  <li>Educational programs on solar energy and sustainability.</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-oswald" style={{ fontSize: "17px" }}>
                  Maintenance and Support:
                </h3>
                <ul className="space-y-2 text-gray-700 font-raleway text-base">
                  <li>Comprehensive maintenance services to ensure optimal performance.</li>
                  <li>Customer support for any solar-related issues.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center my-10 space-y-8">
        <div className="p-6 space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 font-oswald">
            Grid-tied solar with battery backup
          </h1>
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800 font-oswald">
              Solution:
            </h2>
            <p className="text-base text-gray-700 font-raleway leading-relaxed">
              Rooftop solar array provides power with both batteries and grid as backup power.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800 font-oswald">
              Components:
            </h2>
            <p className="text-base text-gray-700 font-raleway leading-relaxed">
              Rooftop solar array, hybrid solar inverter, Li-ion batteries, smart meter &amp; remote monitoring.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800 font-oswald">
              Size Range:
            </h2>
            <p className="text-base text-gray-700 font-raleway">
              3kW -50kW+
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800 font-oswald">
              Customers:
            </h2>
            <p className="text-base text-gray-700 font-raleway">
              Households, businesses, hotels, factories
            </p>
          </section>
        </div>
        <div>
          <Image
            src="/images/battery.png"
            height={500}
            width={600}
            alt="battery solar"
            layout="responsive"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>

      {/* Solar water pumping */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 justify-between">
        <div>
          <Image
            src="/images/water.png"
            height={500}
            width={600}
            alt="battery solar"
            layout="responsive"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="p-6 space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 font-oswald">
            Solar water pumping
          </h1>
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800 font-oswald">
              Solution:
            </h2>
            <p className="text-base text-gray-700 font-raleway leading-relaxed">
              Solar power eliminates diesel genset with daytime pumping, water tank storage, and drip irrigation.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800 font-oswald">
              Components:
            </h2>
            <p className="text-base text-gray-700 font-raleway leading-relaxed">
              Solar PV modules, controller, water pump, water tank and drip irrigation system.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800 font-oswald">
              Size Range:
            </h2>
            <p className="text-base text-gray-700 font-raleway">
              Shallow wells or deep boreholes for small or large farms.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800 font-oswald">
              Customers:
            </h2>
            <p className="text-base text-gray-700 font-raleway">
              Small farms, large farms, water sellers
            </p>
          </section>
        </div>
      </div>

      {/* Solar water heating */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center my-10 space-y-8">
        <div className="p-6 space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 font-oswald">
            Solar water heating
          </h1>
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800 font-oswald">
              Solution:
            </h2>
            <p className="text-base text-gray-700 font-raleway leading-relaxed">
              Solar heated water stored on rooftop eliminates electricity needed for conventional water heaters.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800 font-oswald">
              Components:
            </h2>
            <p className="text-base text-gray-700 font-raleway leading-relaxed">
              Solar water heater and storage tank connected to hot water supply lines provide hot water 24 hrs/day.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800 font-oswald">
              Size Range:
            </h2>
            <p className="text-base text-gray-700 font-raleway">
              Individual units store 300L
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800 font-oswald">
              Customers:
            </h2>
            <p className="text-base text-gray-700 font-raleway">
              Households (1 unit), hotels &amp; restaurants (multiple units)
            </p>
          </section>
        </div>
        <div>
          <Image
            src="/images/heating.png"
            height={500}
            width={600}
            alt="battery solar"
            layout="responsive"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>

      {/* Integrated Features Section placed just before the universal footer */}
      <EnergyFeatures />
    </div>
  );
}
