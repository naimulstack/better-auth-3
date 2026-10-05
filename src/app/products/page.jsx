"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductsPage() {
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

                setProducts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    if (loading) {
        return <div className="py-20 text-center">Loading products...</div>;
    }

    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-10">
                    <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                        Our Store
                    </p>

                    <h1 className="mt-2 text-4xl font-bold text-gray-900">
                        All Products
                    </h1>
                </div>

                <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Link href={`/products/${product.id}`}>
                                <div className="relative aspect-square overflow-hidden bg-gray-100">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </Link>

                            <div className="p-4">
                                <p className="text-xs font-medium uppercase text-red-600">
                                    {product.category}
                                </p>

                                <h2 className="mt-1 line-clamp-1 font-semibold text-gray-900">
                                    {product.name}
                                </h2>

                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-lg font-bold">
                                        ${product.price}
                                    </span>

                                    <button
                                        onClick={() => addToCart(product)}
                                        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}