import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-2xl font-extrabold text-white">
              Jihan<span className="text-red-600">Dev</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Your trusted online shopping destination for quality products,
              great deals and a smooth shopping experience.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-red-600 hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-red-600 hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-red-600 hover:text-white"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-red-600 hover:text-white"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-red-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="transition hover:text-red-500"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="transition hover:text-red-500"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-red-500"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-red-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Categories</h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/category/electronics"
                  className="transition hover:text-red-500"
                >
                  Electronics
                </Link>
              </li>

              <li>
                <Link
                  href="/category/fashion"
                  className="transition hover:text-red-500"
                >
                  Fashion
                </Link>
              </li>

              <li>
                <Link
                  href="/category/beauty"
                  className="transition hover:text-red-500"
                >
                  Beauty
                </Link>
              </li>

              <li>
                <Link
                  href="/category/groceries"
                  className="transition hover:text-red-500"
                >
                  Groceries
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="transition hover:text-red-500"
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>

            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li>
                <span className="block text-gray-200">Email</span>
                support@shopzone.com
              </li>

              <li>
                <span className="block text-gray-200">Phone</span>
                +880 1234-567890
              </li>

              <li>
                <span className="block text-gray-200">Address</span>
                Chattogram, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="flex flex-col gap-3 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 JihanDev. All rights reserved.</p>

            <div className="flex gap-5">
              <Link
                href="/privacy"
                className="transition hover:text-red-500"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-red-500"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}