"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const isSignedIn = !!session?.user;
    const { cartCount } = useCart();
    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/sign-in");
                },
            },
        });
    };

    return (
        <nav className="border-b bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

                <Link
                    href="/"
                    className="text-2xl font-bold text-gray-900"
                >
                    Jihan<span className="text-red-600">Dev</span>
                </Link>

                <ul className="hidden items-center gap-8 md:flex">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-red-600"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/products"
                            className="text-gray-700 hover:text-red-600"
                        >
                            Products
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/categories"
                            className="text-gray-700 hover:text-red-600"
                        >
                            Categories
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/contact"
                            className="text-gray-700 hover:text-red-600"
                        >
                            Contact
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/profile"
                            className="text-gray-700 hover:text-red-600"
                        >
                            Profile
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center gap-3">
                    {isSignedIn ? (
                        <>
                            <Link
                                href="/cart"
                                className="relative p-2 text-gray-700 hover:text-red-600"
                            >
                                <FaShoppingCart size={20} />

                                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                                    {cartCount}
                                </span>
                            </Link>

                            <button
                                type="button"
                                onClick={handleSignOut}
                                className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/sign-in"
                                className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                            >
                                Sign In
                            </Link>

                            <Link
                                href="/sign-up"
                                className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
