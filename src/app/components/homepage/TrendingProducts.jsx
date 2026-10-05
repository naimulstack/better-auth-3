"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

const TrendingProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/products.json");
                const data = await response.json();

                const trendingProducts = data.filter(
                    (product) => product.trending === true
                );

                setProducts(trendingProducts);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="flex justify-center py-20">
                        <p className="text-gray-500">
                            Loading products...
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4">

                <div className="mb-10 flex items-end justify-between">
                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-600">
                            Popular Right Now
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Trending Products
                        </h2>

                        <p className="mt-2 max-w-xl text-gray-500">
                            Discover the products everyone is loving right now.
                        </p>
                    </div>

                    <Link
                        href="/products"
                        className="hidden rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:block"
                    >
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.slice(0, 8).map((product) => (
                        <div
                            key={product.id}
                            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="relative aspect-square overflow-hidden bg-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />

                                <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                                    Trending
                                </span>
                            </div>

                            <div className="p-5">
                                <p className="text-sm text-gray-400">
                                    {product.category}
                                </p>

                                <h3 className="mt-1 line-clamp-1 text-lg font-semibold text-gray-900">
                                    {product.title}
                                </h3>

                                <div className="mt-2 flex items-center gap-1">
                                    <FaStar className="text-yellow-400" />
                                    <span className="text-sm font-medium text-gray-700">
                                        {product.rating}
                                    </span>
                                </div>

                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-xl font-bold text-gray-900">
                                        ${product.price}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() => addToCart(product)}
                                        className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                                    >
                                        <FaShoppingCart />
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <Link
                        onClick={() => addToCart(product)}
                        href="/products"
                        className="inline-block rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                        View All Products
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default TrendingProducts;