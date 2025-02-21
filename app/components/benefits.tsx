import Image from "next/image"

export default function Benefits() {
  const benefits = [
    {
      title: "ENERGY-EFFICIENT LIVING",
      image:
        "/images/solar.jpg",
    },

    {
      title: "SUSTAINABLE AGRICULTURE",
      image:
        "/images/energy.jpg",
    },
    {
      title: "BRIGHT FUTURE FOR GENERATIONS",
      image:
        "/images/people.png",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <h4 className="text-lg font-semibold mb-3 text-[#1e3a8a]">✓ {benefit.title}</h4>
                <div className="relative h-[36rem] mb-4 overflow-hidden rounded-lg">
                <Image src={benefit.image || "/placeholder.svg"} alt={benefit.title} fill className="object-cover" />
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

