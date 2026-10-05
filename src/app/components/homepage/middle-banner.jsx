import Image from "next/image";
import Link from "next/link";
import bgImage from "../../../../public/images/image-1.jpg"

export default function MiddleBanner() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative min-h-[350px] overflow-hidden rounded-3xl">
                    <Image
                        src={bgImage}
                        alt="Woman with Electronics"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />

                    <div className="absolute inset-0 bg-black/60" />

                    <div className="relative z-10 flex min-h-[350px] items-center px-8 py-12 md:px-14 lg:px-20">
                        <div className="max-w-xl text-white">
                            <span className="inline-block rounded-full bg-red-600 px-4 py-2 text-sm font-semibold">
                                Special Offer
                            </span>

                            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                                Great Deals.
                                <br />
                                Better Shopping.
                            </h2>

                            <p className="mt-4 max-w-lg text-base leading-7 text-gray-200 md:text-lg">
                                Discover amazing products at unbeatable prices. Shop your
                                favorites and enjoy exclusive deals today.
                            </p>

                            <Link
                                href="/products"
                                className="mt-7 inline-block rounded-lg bg-red-600 px-7 py-3.5 font-semibold text-white transition hover:bg-red-700"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}