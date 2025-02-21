export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Client Assessment",
      description:
        "We begin by understanding your unique needs and goals. This involves a thorough consultation to assess your energy requirements, site suitability, and the specific applications you want to power, whether it's residential, commercial, or agricultural. Our team works closely with you to gather all necessary details to tailor the perfect solution.",
    },
    {
      number: "02",
      title: "Planning",
      description:
        "Based on the assessment, we create a customized plan to meet your needs. This includes system design, energy output projections, and selecting the best solar technology. We ensure the plan aligns with your budget and timeline while adhering to local regulations and sustainable practices.",
    },
    {
      number: "03",
      title: "Client Acknowledgment & Finalization",
      description:
        "Once the plan is complete, we present it to you for review and approval. Your feedback is incorporated to ensure the solution perfectly fits your vision. After your acknowledgment, we finalize the design, schedule the installation, and prepare to bring the project to life.",
    },
  ]

  return (
    <section className="py-20" style={{ background: 'linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(243, 244, 246) 84%)' }}>
      <div className="container mx-auto px-4">
      <div className="flex justify-center mb-4">
        <h2 className="text-center text-sm text-gray-600 inline-block px-4 py-2 bg-white rounded-lg">HOW WE WORK</h2>
      </div>
      <h3 className="text-4xl font-bold text-center mb-16">What to expect</h3>

      <div className="grid md:grid-cols-3 gap-8 mx-10">
        {steps.map((step, index) => (
        <div key={index} className="space-y-4 bg-white rounded-lg p-5">
            <div className="text-4xl  text-[#1e3a8a] font-normal tracking-widest">{step.number}</div>
          <h4 className="text-xl font-bold">{step.title}</h4>
          <p className="text-gray-600">{step.description}</p>
        </div>
        ))}
      </div>
      </div>
    </section>
  )
}

