import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { oswald } from "@/app/fonts"
import ContactForm from "@/components/features/contact"
export default function ContactSection() {
 
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className={`my-1 text-4xl font-bold text-[#1B3B75] md:text-5xl lg:text-6xl ${oswald.className}`}>Contact Us</h1>
        <p className="mx-auto my-11 text-start  max-w-6xl text-2xl text-black">
          Whether you're a prospective client seeking solar solutions for your business or a young individual searching
          for opportunities, don't hesitate to reach out to us. We're here to help.
        </p>
      </div>
      <div className="justify-center items-center">
        <ContactForm />
      </div>


      {/* Contact Info and Images Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Card */}
        <Card className="bg-black text-white">
          <CardContent className="p-6">
            <p className="mb-8 text-gray-300">
              Feel free to visit our office or reach out to us via mobile or email. We're here to assist you with any
              inquiries or assistance you may need.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-300" />
              <div>
                <p>Garowe, Puntland</p>
                <p className="text-gray-400">Jidka Nawawi (Nawawi Street)</p>
              </div>
              </div>

              <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-300" />
              <a href="tel:+252906904702" className="hover:text-gray-300">
                (252) 906-90-7402
              </a>
              </div>

              <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-300" />
              <a href="mailto:Info@nomadenergy.net" className="hover:text-gray-300">
                Info@nomadenergy.net
              </a>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* Images Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          <Image
            src="/images/solarman.png"
            alt="Solar panel installation"
            width={400}
            height={600}
            className="rounded-lg object-cover h-full"
          />
          <Image
            src="/images/employee.jpeg"
            alt="Equipment maintenance"
            width={400}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mt-16 text-center">
        <p className="mx-auto my-20 text-start  max-w-7xl text-2xl text-black">
          At Nomad Energy, we prioritize hiring locals for contract jobs, and we are willing to provide training when
          necessary to cultivate future employment opportunities and make a positive impact on our community.
        </p>
      </div>
    </div>
  )
}

