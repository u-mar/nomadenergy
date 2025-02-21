"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "How Solar Panels Work: A Beginner's Guide",
    excerpt: "Understand the science behind solar panels and how they convert sunlight into electricity.",
    link: "https://www.energy.gov/eere/solar/how-solar-works",
    image: "/images/solar1.jpg",
  },
  {
    title: "The History of Solar Energy: From Discovery to Modern Use",
    excerpt: "Explore the evolution of solar energy technology over the centuries.",
    link: "https://www.seia.org/initiatives/about-solar-energy",
    image: "/images/solar7.jpg",
  },
  {
    title: "Benefits of Solar Energy for the Environment",
    excerpt: "Learn how solar power reduces carbon emissions and promotes sustainability.",
    link: "https://www.nationalgeographic.com/environment/article/solar-power",
    image: "/images/solar3.jpg",
  },
  {
    title: "Solar Energy Storage: The Future of Renewable Power",
    excerpt: "Discover how advancements in battery technology are revolutionizing solar energy storage.",
    link: "https://www.sciencedirect.com/topics/engineering/solar-energy-storage",
    image: "/images/solar4.jpg",
  },
  {
    title: "Solar Energy in Developing Countries: A Path to Energy Independence",
    excerpt: "See how solar power is transforming energy access in remote and underserved regions.",
    link: "https://www.worldbank.org/en/topic/energy/brief/solar-energy",
    image: "/images/solar5.jpg",
  },
  {
    title: "The Economics of Solar Energy: Costs and Savings",
    excerpt: "Find out how solar energy systems can save money and provide long-term financial benefits.",
    link: "https://www.nrel.gov/analysis/solar-costs.html",
    image: "/images/solar6.jpg",
  },
];

export default function NewsFeedCarousel() {
  return (
    <section className="max-w-5xl mx-auto py-10">
      <h2 className="text-2xl font-semibold text-center mb-6">
       SOLAR ENERGY INSIGHTS
      </h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          641: { slidesPerView: 2 }, // Show 2 slides per view on medium+ screens
        }}
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={250}
              className="rounded-md w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mt-3">{article.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{article.excerpt}</p>
            <Link
              href={article.link}
              className="text-blue-600 hover:underline mt-4 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more →
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
