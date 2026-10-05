"use client";

import { signIn } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        const { data: signInData, error } = await signIn.email({
            email: data.email,
            password: data.password,
            callbackURL: "/",
        });

        console.log(signInData, error);

        if (!error) {
            router.push("/");
        }
    };
    const signInGoogle = async () => {
        const data = await signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg sm:p-8">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Sign in to your account to continue shopping.
                    </p>
                </div>

                <Form className="w-full" onSubmit={onSubmit}>
                    <Fieldset className="w-full">
                        <FieldGroup>
                            <TextField
                                isRequired
                                name="email"
                                type="email"
                            >
                                <Label>Email</Label>

                                <Input
                                    placeholder="john@example.com"
                                    className="mt-1"
                                />

                                <FieldError />
                            </TextField>

                            <TextField
                                isRequired
                                name="password"
                                type="password"
                            >
                                <Label>Password</Label>

                                <Input
                                    placeholder="Enter your password"
                                    className="mt-1"
                                />

                                <FieldError />
                            </TextField>
                        </FieldGroup>

                        <div className="text-right">
                            <a
                                href="/forgot-password"
                                className="text-sm font-medium text-red-600 hover:text-red-700"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <Fieldset.Actions className="flex flex-col gap-3">
                            <Button
                                type="submit"
                                className="w-full bg-red-600 text-white hover:bg-red-700"
                            >
                                Sign In
                            </Button>

                            <div className="flex w-full items-center gap-3">
                                <div className="h-px flex-1 bg-gray-200" />

                                <span className="text-sm text-gray-400">
                                    OR
                                </span>

                                <div className="h-px flex-1 bg-gray-200" />
                            </div>

                            <Button
                                onClick={signInGoogle}
                                type="button"
                                className="w-full bg-red-600 text-white hover:bg-red-700"
                            >
                                <FcGoogle size={20} />
                                Continue with Google
                            </Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </Form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Don&apos;t have an account?{" "}
                    <a
                        href="/sign-up"
                        className="font-medium text-red-600 hover:text-red-700"
                    >
                        Create Account
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Page;