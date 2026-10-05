"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMinus, FaPlus, FaTrash, FaArrowLeft } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
    const {
        cart,
        cartTotal,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    if (cart.length === 0) {
        return (
            <main className="min-h-screen bg-gray-50 py-16">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
                        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                            <FaTrash className="text-3xl text-red-600" />
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900">
                            Your Cart is Empty
                        </h1>

                        <p className="mt-3 text-gray-500">
                            Looks like you have not added anything to your cart yet.
                        </p>

                        <Link
                            href="/products"
                            className="mt-7 inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
                        >
                            <FaArrowLeft />
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 py-12">
            <div className="mx-auto max-w-7xl px-4">

                <div className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                        Shopping Cart
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                        Your Cart
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Review your products and complete your order.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">

                    <div className="space-y-4 lg:col-span-2">
                        {cart.map((product) => (
                            <div
                                key={product.id}
                                className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
                            >
                                <div className="relative h-28 w-full overflow-hidden rounded-xl bg-gray-100 sm:h-28 sm:w-28">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-1">
                                    <p className="text-sm text-gray-400">
                                        {product.category}
                                    </p>

                                    <h2 className="mt-1 text-lg font-semibold text-gray-900">
                                        {product.title}
                                    </h2>

                                    <p className="mt-2 text-lg font-bold text-red-600">
                                        ${product.price.toFixed(2)}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
                                    <div className="flex items-center rounded-lg border border-gray-200">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                decreaseQuantity(product.id)
                                            }
                                            className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                                        >
                                            <FaMinus className="text-xs" />
                                        </button>

                                        <span className="flex h-9 min-w-10 items-center justify-center border-x border-gray-200 px-3 font-semibold">
                                            {product.quantity}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                increaseQuantity(product.id)
                                            }
                                            className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                                        >
                                            <FaPlus className="text-xs" />
                                        </button>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            removeFromCart(product.id)
                                        }
                                        className="flex items-center gap-2 text-sm font-medium text-red-600 transition hover:text-red-700"
                                    >
                                        <FaTrash />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-gray-900">
                                Order Summary
                            </h2>

                            <div className="mt-6 space-y-4">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>

                                <div className="border-t border-gray-200 pt-4">
                                    <div className="flex justify-between">
                                        <span className="text-lg font-bold text-gray-900">
                                            Total
                                        </span>

                                        <span className="text-xl font-bold text-red-600">
                                            ${cartTotal.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="mt-6 w-full rounded-md bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
                            >
                                Proceed to Checkout
                            </button>

                            <Link
                                href="/products"
                                className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-gray-600 transition hover:text-red-600"
                            >
                                <FaArrowLeft />
                                Continue Shopping
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default CartPage;
