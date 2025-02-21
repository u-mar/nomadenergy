import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ClientTestimonials() {
  const testimonials = [
    {
      quote: "Nomad Energy made five years off the grid possible for our school",
      organization: "ABAADI",
      subtitle: "Abaadi Learning & Research Center",
      logo: "/images/placeholder.svg",
    },
    {
      quote:
        "An amazing staff at Nomad Energy! Our expensive utility bills have been cut by more than 80%, and now our staff enjoys air-conditioned rooms without guilt.",
      organization: "SRCS",
      subtitle: "Somali Red Crescent Society",
      logo: "/images/placeholder.svg",
    },
    {
      quote: "Nomad Energy's amazing planning ensures safety, quality, and expertise every step of the way.",
      organization: "Nugal",
      subtitle: "Nugal Primary And Secondary School",
      logo: "/images/placeholder.svg",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <h2 className="text-center text-sm text-gray-600 inline-block px-4 py-2 bg-white rounded-lg">PARTNERSHIPS CREATED</h2>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">Prestigious Clients</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`bg-[#1e1e1e] text-white ${index === 1 ? 'md:row-span-2' : ''}`}>
              <CardContent className="p-6">
                <blockquote className="mb-6 text-lg">{testimonial.quote}</blockquote>
                <hr className="text-white bg-white my-7"  />
                <div className="flex items-center justify-between">
                
                  <div>
                    <h4 className="font-bold">{testimonial.organization}</h4>
                    <p className="text-sm text-gray-400">{testimonial.subtitle}</p>
                  </div>
                  <Image
                    src={testimonial.logo || "./images/person.png"}
                    alt={`${testimonial.organization} logo`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
