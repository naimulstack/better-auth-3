"use client";

import { signUp } from "@/lib/auth-client";
import {
    Button,
    Description,
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

const signUpPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        const { data: signUpData, error } = await signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            callbackURL: "/verify-email",
        });

        if (!error) {
            router.push("/verify-email");
        }

        console.log(signUpData, error);
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
                        Create Account
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Create your account and start shopping with us.
                    </p>
                </div>

                <Form className="w-full" onSubmit={onSubmit}>
                    <Fieldset className="w-full">
                        <FieldGroup>
                            <TextField
                                isRequired
                                name="name"
                                validate={(value) => {
                                    if (value.length < 3) {
                                        return "Name must be at least 3 characters";
                                    }

                                    return null;
                                }}
                            >
                                <Label>Name</Label>

                                <Input
                                    placeholder="John Doe"
                                    className="mt-1"
                                />

                                <FieldError />
                            </TextField>

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
                                minLength={8}
                                name="password"
                                type="password"
                                validate={(value) => {
                                    if (value.length < 8) {
                                        return "Password must be at least 8 characters";
                                    }

                                    if (!/[A-Z]/.test(value)) {
                                        return "Password must contain at least one uppercase letter";
                                    }

                                    if (!/[0-9]/.test(value)) {
                                        return "Password must contain at least one number";
                                    }

                                    return null;
                                }}
                            >
                                <Label>Password</Label>

                                <Input
                                    placeholder="Enter your password"
                                    className="mt-1"
                                />

                                <Description>
                                    Must be at least 8 characters with 1
                                    uppercase and 1 number
                                </Description>

                                <FieldError />
                            </TextField>
                        </FieldGroup>

                        <Fieldset.Actions className="mt-6 flex flex-col gap-3">
                            <Button
                                type="submit"
                                className="w-full bg-red-600 text-white hover:bg-red-700"
                            >
                                Create Account
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
                    Already have an account?{" "}
                    <a
                        href="/sign-in"
                        className="font-medium text-red-600 hover:text-red-700"
                    >
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    );
};

export default signUpPage;