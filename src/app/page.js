"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TrendingProducts from "./components/homepage/TrendingProducts";
import Products from "./components/homepage/products";
import MiddleBanner from "./components/homepage/middle-banner";

const slides = [
  {
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=1920&q=85",
    title: "Latest Electronics",
    description:
      "Discover the latest gadgets, smart devices and electronics at great prices.",
  },
  {
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1920&q=85",
    title: "Style Essentials",
    description:
      "Explore trending fashion, modern outfits and premium collections for everyone.",
  },
  {
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1920&q=85",
    title: "Beauty Essentials",
    description:
      "Find your favorite skincare, makeup and beauty essentials all in one place.",
  },
  {
    category: "Groceries",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=85",
    title: "Fresh Groceries",
    description:
      "Shop fresh groceries and everyday essentials delivered right to your door.",
  },
];

const categories = [
  {
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=85",
    href: "/category/electronics",
  },
  {
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=85",
    href: "/category/fashion",
  },
  {
    name: "Beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
    href: "/category/beauty",
  },
  {
    name: "Groceries",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
    href: "/category/groceries",
  },
  {
    name: "More",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
    href: "/categories",
  },
];

const homePage = () =>  {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-[600px] w-full overflow-hidden rounded-2xl md:h-[650px] container mx-auto">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                index === current
                  ? "translate-x-0"
                  : index < current
                    ? "-translate-x-full"
                    : "translate-x-full"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <span className="mb-5 inline-block rounded-full bg-red-600 px-4 py-2 text-sm font-semibold">
                {slides[current].category}
              </span>

              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {slides[current].title}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-200 sm:text-lg">
                {slides[current].description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/shop"
                  className="rounded-lg bg-red-600 px-7 py-3.5 font-semibold text-white transition hover:bg-red-700"
                >
                  Shop Now
                </Link>

                <Link
                  href="/products"
                  className="rounded-lg border border-white/70 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index ? "w-8 bg-red-600" : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-8 right-6 z-20 hidden text-sm font-medium text-white md:right-10 md:block">
          <span className="text-red-500">0{current + 1}</span>
          <span className="mx-2 text-white/50">/</span>
          <span>0{slides.length}</span>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Shop by category
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              Explore Categories
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative h-64 overflow-hidden rounded-2xl"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-xl font-bold text-white">
                    {category.name}
                  </h3>

                  <span className="mt-1 block text-sm font-medium text-white/80">
                    Shop Now →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TrendingProducts />
      <Products/>
      <MiddleBanner/>



    </>
  );
}
export default homePage