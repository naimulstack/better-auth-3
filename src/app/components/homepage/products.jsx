"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch("/api/products.json");

                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await res.json();

                setProducts(data.slice(0, 8));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    if (loading) {
        return (
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                        {Array.from({ length: 9 }).map((_, index) => (
                            <div
                                key={index}
                                className="h-80 animate-pulse rounded-2xl bg-gray-200"
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                            Featured Products
                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                            Our Latest Products
                        </h2>
                    </div>

                    <Link
                        href="/products"
                        className="hidden rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:block"
                    >
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Link href={`/products/${product._id}`}>
                                <div className="relative aspect-square overflow-hidden bg-gray-100">
                                    <Image
                                        src={product.image}
                                        alt={product.name || "Product image"}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    />
                                </div>
                            </Link>

                            <div className="p-4">
                                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-red-600">
                                    {product.category}
                                </p>

                                <Link href={`/products/${product._id}`}>
                                    <h3 className="line-clamp-1 text-base font-semibold text-gray-900 transition hover:text-red-600">
                                        {product.name}
                                    </h3>
                                </Link>

                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-lg font-bold text-gray-900">
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
                        href="/products"
                        className="inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
                    >
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
}