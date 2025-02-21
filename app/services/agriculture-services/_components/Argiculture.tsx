import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { oswald } from "@/app/fonts"
import Link from "next/link"

export default function AgricultureSection() {

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="relative max-w-full mx-auto px-4 py-16 text-center bg-white">
        <h1 className={`my-28 text-4xl font-bold text-[#1B3B75] md:text-5xl lg:text-6xl ${oswald.className}`}>Agriculture Services/Supplies</h1>

        <div className="space-y-16 relative">
          <div className="absolute  inset-0 bg-[radial-gradient(circle,_#cbd5e1_2px,_transparent_2px)] bg-[length:20px_20px] opacity-30 transition-transform duration-1000"></div>

          {/* Main content area */}
          <div className="space-y-6">
            <div className="uppercase tracking-wide text-sm py-6 bg-white font-medium rounded-lg">Agriculture Services/Supplies</div>

            <h2 className={`text-4xl md:text-5xl font-bold leading-tight  ${oswald.className} `}>
              Empowering Local Farmers with Tools and Expertise
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              Beyond solar projects, we are dedicated to supporting local farmers with dependable tools like brush
              cutters, hedge trimmers, and solar water pumps. Additionally, we offer professional site assessments to
              ensure the right solutions for every farm's unique needs. By combining reliable equipment with tailored
              expertise, we help farmers maximize productivity and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* image */}
      <div className="flex justify-center items-center">
        <Image
          alt="Agriculture Services/Supplies"
          src="/images/image-2.png"
          height={700}
          width={800}
        />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image grid */}
          <div className="grid  gap-4 relative">
            {/* Row 1 */}
            <Image
              src="/images/Aesthetic-Candle.jpg"
              alt="Chainsaw"
              width={300}
              height={200}
              className="w-full h-auto"
            />


          </div>

          {/* Right side - Text content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">Top-Quality Agricultural Tools and Equipment</h1>

            <p className="text-gray-700 leading-relaxed">
              As a trusted supplier, we provide durable gas mix and battery brush cutters for clearing dense vegetation
              efficiently. Our reliable earth augers make planting and soil preparation effortless, saving valuable time
              for farmers. For sustainable agriculture, our solar water pumps deliver eco-friendly water management
              solutions. Additionally, our robust chain saws and hedge trimmers support land maintenance and crop care
              with precision. With tools built to enhance productivity, we're here to empower modern farming.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Trusted Agricultural Equipment</h3>
                <p className="text-gray-600">
                  Our tools, from brush cutters to earth augers, are designed to handle tough farming tasks with ease and
                  reliability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Empowering Modern Farming</h3>
                <p className="text-gray-600">
                  With solar water pumps and efficient cutting tools, we provide sustainable solutions to boost
                  agricultural productivity.
                </p>
              </div>
            </div>
            <hr className="border-t-2 border-black my-8" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 ">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Partnering with Experts for Comprehensive Organic Farming Solutions
        </h1>

        <p className="text-gray-700 mb-5 leading-relaxed">
          We team up with expert organic agriculture specialists to conduct a thorough site survey, including
          environmental assessments of pests, diseases, climatic conditions, and neighboring farms. Our team designs
          efficient irrigation systems tailored to crop type, field size, and topography, determines optimal placement
          for greenhouses and shade net houses, and collects soil samples for fertility and pathology testing. These
          insights guide soil regeneration, crop selection, and rotation strategies. Additionally, we assess water
          resources, raw materials, infrastructure needs, and scalability potential, delivering a detailed report with
          tailored recommendations to ensure sustainable and successful farming operations.
        </p>

        <Link href={'/contact'} className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white rounded-lg px-8 py-6 mt-8 text-lg" >
          Schedule a Consultation
        </Link>
          </div>

          {/* Right Column */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-6 justify-center ">
        <div className="relative w-full md:w-1/3 h-[200px] md:h-auto self-center">
          <Image
            src="/images/replicate.jpg"
            alt="Aerial view of organic farming facility"
            width={300}
            height={200}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full md:w-2/3 h-auto">
          <Image
            src="/images/man.jpg"
            alt="Agricultural expert conducting field assessment"
            width={350}
            height={250}
            className="object-cover rounded-lg"
          />
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

