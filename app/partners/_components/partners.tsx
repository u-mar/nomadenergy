import { oswald } from "@/app/fonts";
import { Check } from "lucide-react";
import Image from "next/image";


export default function PartnerSection() {


  return (
    <div className="flex flex-col min-h-screen">
      <section className="container mx-auto px-4 py-20 text-center overflow-hidden">
        {/* Title Section with Animation */}
        <div className="relative inline-block mb-8 transform hover:scale-105 transition-transform duration-300">
          <div className="inline-flex items-center justify-center rounded-full font-bold text-4xl px-6 py-4 text-[#1e3a8a] ">
            Our Partners
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-2 mt-6 rounded-full bg-[#1e3a8a] animate-pulse"></div>
        </div>

        {/* Main Heading with Gradient */}
        <h1 className="text-5xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
          Beyond Clients: Partners in Renewable Progress
        </h1>

        {/* Description with improved typography */}
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-xl mb-16 leading-relaxed">
          At Nomad Energy, we don't just treat you as a client—We value you as a partner in creating a sustainable future.
        </p>

        {/* Features with hover effects */}
        <div className="flex justify-center gap-12 flex-wrap mb-20">
          {[
            "COMMUNITY OUTREACH",
            "CLEAN ENERGY",
            "MAXIMIZES POTENTIALS"
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg  transition-all duration-300 hover:-translate-y-1">
              <Check className="text-green-500 h-6 w-6" />
              <span className="font-semibold tracking-wide">{feature}</span>
            </div>
          ))}
        </div>

        {/* Main Partners Grid with hover effects */}
        <div className="max-w-6xl mx-auto flex justify-center gap-8 mb-20">
          {["/images/nugaal.jpg", "/images/ururka.jpg", "/images/abaadi.png"].map((src, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-300">
              <Image
                src={src}
                alt="Partner Logo"
                width={500}
                height={400}
                className="object-contain rounded-lg "
              />
            </div>
          ))}
        </div>

        {/* Secondary Partners Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {["/images/roof.png", "/images/scrc.jpg", "/images/roof7.png", "/images/roof2.png"].map((src, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'items-end' : 'items-start'} transform hover:scale-105 transition-all duration-300`}>
              <Image
                src={src}
                alt="Partner Logo"
                width={300}
                height={400}
                className="object-contain rounded-lg "
              />
            </div>
          ))}
        </div>
      </section>



      {/* Services Section */}
      <section className="container px-4 py-12 mx-32">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-blue-900">Precision Array Siting</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We use state-of-the-art array siting software to determine optimal locations for solar installations.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              This ensures maximum energy production and long-term system efficiency.
            </p>
          </div>
          <div className="rounded-tr-full">
            <Image
              src="/images/tech.png"
              alt="Solar Array Diagram"
              width={350}
              height={450}
              className="rounded-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
      <section className="container px-4 py-12 mx-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-tr-full">
            <Image
              src="/images/tech2.png"
              alt="Solar Array Diagram"
              width={350}
              height={450}
              className="rounded-tl-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-blue-900">Optimize Solar Performance</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We use advanced shade analysis software in our solar array design to ensure optimal panel placement and maximize energy production, even in shaded conditions.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F7F8] py-12 mx-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl font-bold text-black mb-8 ${oswald.className}`}>
            We Make It Right, the First Time!
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 h-auto">
              <video
                src="/images/NE-PROMO-2.mp4"
                controls
                className="w-full h-auto rounded-lg shadow-lg"
              ></video>
            </div>
            <div className="w-full md:w-1/2 text-left">
              <p className="text-xl text-black leading-relaxed">
                The client approached us after a previous job was poorly executed by others. We took on the challenge, ensuring the work was completed correctly with careful attention to detail and precision, delivering the results they deserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



