"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const page = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                    <MdEmail className="text-3xl text-red-600" />
                </div>

                <h1 className="text-2xl font-bold text-gray-900">
                    Check Your Email
                </h1>

                <p className="mt-3 text-gray-500">
                    We have sent a verification link to your email address.
                </p>

                <p className="mt-2 text-sm text-gray-500">
                    Please check your inbox and click the verification link
                    to verify your email address.
                </p>

                <div className="mt-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
                    <p>
                        Didn&apos;t receive the email?
                    </p>

                    <p className="mt-1">
                        Check your <strong>Spam</strong> or{" "}
                        <strong>Junk</strong> folder.
                    </p>
                </div>

                <div className="mt-6">
                    <Link href="/sign-in">
                        <Button
                            className="w-full bg-red-600 text-white hover:bg-red-700"
                        >
                            Go to Sign In
                        </Button>
                    </Link>
                </div>

                <p className="mt-5 text-sm text-gray-400">
                    You can verify your email before signing in.
                </p>
            </div>
        </div>
    );
};

export default page;