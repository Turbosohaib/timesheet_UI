"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LargeButton from "@/components/largeButton";
import Girl_on_stool from "@/assets/images/signup-page/Girl-on-stool-Illustration.png";
import TimeSheet_logo from "@/assets/images/signup-page/Time-sheet-Clock.png";
import TimeSheet_minilogo from "@/assets/images/signup-page/Time-sheet-Logo-Header.png";
import Google_Logo from "@/assets/images/signup-page/google-logo.png";
import Head from "next/head";

type FormValues = {
  name: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
};

const Page = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const router = useRouter();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = () => {};

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Head>
        <link rel="icon" href="/Time-sheet-Clock.png" />
        <title>Tracker</title>
      </Head>
      <div className="h-screen grid grid-cols-3 bg-gradient-to-b from-[#f1f1f1] to-[#fbfbfb] opacity-[100%]">
        <div className="w-full flex justify-center items-end">
          <div className="ml-12">
            <Image
              src={Girl_on_stool}
              width={300}
              height={200}
              alt="Girl-on-stool-Illustration"
            />
          </div>
        </div>
        <div>
          <div className="w-full flex justify-center items-center mt-2">
            <div>
              <Link
                href="/"
                className="w-full flex justify-start ml-8 items-center mb-2"
              >
                <div>
                  <Image
                    src={TimeSheet_minilogo}
                    width={180}
                    height={100}
                    alt="Time-sheet-Clock.png"
                  />
                </div>
              </Link>
              <div className="px-[35px] pt-[15px] pb-[8px] bg-white shadow-lg">
                <h1 className="font-semibold text-[#555555] mt-2 tracking-[0.3px]">
                  Registration
                </h1>
                <div
                  className="w-full cursor-pointer hover:bg-[#fbfbfb] flex justify-center items-center rounded-sm border px-12 py-2.5 mt-8
            mb-4"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      src={Google_Logo}
                      width={25}
                      height={30}
                      alt="Google-logo"
                    />
                    <div className="px-2 text-[#555555] font-semibold text-xs tracking-[0.2px]">
                      Sign up with Google
                    </div>
                  </div>
                </div>
                <Formik
                  initialValues={initialValues}
                  // validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <div className="mb-4 h-[50px] relative">
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        className={`block w-full border-b focus:border-gray-400 text-sm py-2 outline-0 ${
                          isEmailFocused ? "pt-5" : "pt-2"
                        }`}
                        onFocus={() => setIsEmailFocused(true)}
                        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                          if (!e.target.value) {
                            setIsEmailFocused(false);
                          }
                        }}
                      />
                      <label
                        htmlFor="email"
                        className={`absolute transition-all duration-300 ${
                          isEmailFocused
                            ? "top-0 left-0 text-xs text-gray-400"
                            : "top-2 text-sm text-gray-500"
                        } opacity-50`}
                      >
                        Your work email
                      </label>
                    </div>
                    <div className="mb-4 h-[50px] relative">
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className={`block w-full border-b focus:border-gray-400 text-sm py-2 outline-0 ${
                          isNameFocused ? "pt-5" : "pt-2"
                        }`}
                        onFocus={() => setIsNameFocused(true)}
                        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                          if (!e.target.value) {
                            setIsNameFocused(false);
                          }
                        }}
                      />
                      <label
                        htmlFor="name"
                        className={`absolute transition-all duration-300 ${
                          isNameFocused
                            ? "top-0 left-0 text-xs text-gray-400"
                            : "top-2 text-sm text-gray-500"
                        } opacity-50`}
                      >
                        Full Name
                      </label>
                    </div>
                    <div className="mb-4 h-[50px] relative">
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        className={`block w-full border-b focus:border-gray-400 text-sm py-2 outline-0 ${
                          isPasswordFocused ? "pt-5" : "pt-2"
                        }`}
                        onFocus={() => setIsPasswordFocused(true)}
                        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                          if (!e.target.value) {
                            setIsPasswordFocused(false);
                          }
                        }}
                      />
                      <label
                        htmlFor="password"
                        className={`absolute transition-all duration-300 ${
                          isPasswordFocused
                            ? "top-0 left-0 text-xs text-gray-400"
                            : "top-2 text-sm text-gray-500"
                        } opacity-50`}
                      >
                        Password
                      </label>
                    </div>
                    <div className="mb-8 w-full flex justify-center">
                      <LargeButton text="Get Started Free" />
                    </div>
                    <hr />
                  </Form>
                </Formik>
                <div className="w-full flex justify-center items-center text-[10px] my-6 text-[#555555]">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="ml-1 hover:text-blue-600 hover:underline"
                  >
                    LOG IN
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 ml-12 mb-4 text-[#555555] flex justify-between items-center text-[8px] px-2 mt-2">
            <div>Copyright &copy; {currentYear} | Connextar Technologies</div>
            <div className="flex items-center">
              <div className="mx-3 hover:underline cursor-pointer">
                Privacy Policy
              </div>
              <div className="hover:underline cursor-pointer">
                Terms & conditions
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-end">
          <div className="mr-12">
            <Image
              src={TimeSheet_logo}
              width={280}
              height={200}
              alt="Time-sheet-Clock.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
