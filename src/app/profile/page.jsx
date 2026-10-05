"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCamera,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
  FaShoppingBag,
  FaHeart,
  FaSignOutAlt,
  FaEdit,
} from "react-icons/fa";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+880 1234-567890",
    address: "123 Main Street",
    city: "Chattogram",
    country: "Bangladesh",
    image: "https://i.pravatar.cc/300?img=12",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setUser({
      ...user,
      image: imageUrl,
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Account
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your personal information and account settings.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <Image
                  src={user.image}
                  alt={`${user.name} profile`}
                  width={140}
                  height={140}
                  className="h-36 w-36 rounded-full object-cover ring-4 ring-gray-100"
                />

                <label
                  htmlFor="profile-photo"
                  className="absolute bottom-1 right-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition hover:bg-red-700"
                >
                  <FaCamera />

                  <input
                    id="profile-photo"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>

              <h2 className="mt-5 text-xl font-bold text-gray-900">
                {user.name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {user.email}
              </p>

              <span className="mt-4 rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold text-green-700">
                Active Customer
              </span>
            </div>

            <div className="mt-8 space-y-2 border-t border-gray-100 pt-6">
              <Link
                href="/orders"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-red-600"
              >
                <FaShoppingBag />
                My Orders
              </Link>

              <Link
                href="/saved"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-red-600"
              >
                <FaHeart />
                Saved Products
              </Link>

              <Link
                href="/change-password"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-red-600"
              >
                <FaLock />
                Change Password
              </Link>

              <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50">
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Personal Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Update your personal details and contact information.
                </p>
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                <FaEdit />
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    disabled
                    className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-gray-100 py-3 pl-11 pr-4 text-sm text-gray-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Phone Number
                </label>

                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Country
                </label>

                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    name="country"
                    value={user.country}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  City
                </label>

                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    name="city"
                    value={user.city}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Address
                </label>

                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="mt-8 flex justify-end border-t border-gray-100 pt-6">
                <button
                  onClick={() => setIsEditing(false)}
                  className="rounded-lg bg-red-600 px-7 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}