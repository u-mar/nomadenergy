import Navbar from "./components/navbar"
import ClientTestimonials from "./components/client-testimonials"
import ProcessSteps from "./components/process-steps"
import Benefits from "./components/benefits"
import NewsFeedCarousel from "./components/Newsfeed";
import { Oswald } from 'next/font/google'

const oswald500 = Oswald({
  subsets: ['latin'],
  weight: '500',
});
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-[#1e3a8a] px-4 py-2 text-sm text-white mb-8">
          NOMAD ENERGY
        </div>

        <h1 className={`${oswald500.className} text-4xl md:text-6xl mb-6 max-w-4xl mx-auto`}>
        Powering Progress: Integrating Solar Energy with Sustainable Agriculture
        </h1>        


        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Illuminate your business or residence with sustainable, renewable energy solutions, while using the same
          technology to support agricultural growth. Whether you're looking to invest in solar energy for your home or
          commercial property, or you want to harness the sun's power for farming, we provide clean energy solutions
          that improve crop yields and reduce environmental impact. With solar-powered irrigation and energy-efficient systems,
           our business supports both residential and agricultural sectors while promoting renewable energy across Somalia.
        </p>
      </section>
      <Benefits />
      <ProcessSteps />
      <ClientTestimonials />


      <NewsFeedCarousel />


    </main>
  )
}

