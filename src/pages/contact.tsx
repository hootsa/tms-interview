import Layout from "@/components/layout/Layout";
import * as React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("submit data", data);

  console.log(errors, "xx");
  return (
    <Layout>
      <div className="relative lg:pb-48 pb-72">
        <div
          className="lg:w-3/4 mx-auto rounded-3xl overflow-hidden"
          style={{
            height: "27rem",
          }}
        >
          <img
            src="https://source.unsplash.com/dWmltMtDuYc"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-12 absolute top-0 right-0 mt-56 lg:mt-20 bg-slate-900 lg:w-1/3 rounded-3xl z-10">
          <h3 className="text-white text-5xl pb-4">Get in touch</h3>
          <p className="text-slate-300 text-lg pb-8">
            We'd love to hear from you. Fill in the form and we'll get back to
            you shortly.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="fullname"
                className="block mb-2 text-sm font-medium text-white"
              >
                Full Name
              </label>
              <input
                {...register("fullname", { required: "Full Name is required" })}
                id="fullname"
                className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John Doe"
                required
              />
              <p className="text-sm text-red-400 pt-0.5 font-extralight h-6">
                {errors?.fullname?.message}
              </p>
              <label
                htmlFor="email"
                className="mt-4 block mb-2 text-sm font-medium text-white"
              >
                Emil Address
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email Address is not Valid",
                  },
                })}
                id="email"
                className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="john.doe@company.com"
                required
              />
              <p className="text-sm text-red-400 pt-0.5 font-extralight h-6">
                {errors?.email?.message}
              </p>
            </div>

            <button
              type="submit"
              className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
