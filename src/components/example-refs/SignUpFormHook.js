import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schemaValidation = Yup.object({
  firstName: Yup.string().required().max(10, "over 10 character"),
});

const SignUpFormHook = () => {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaValidation) });
  console.log(errors);
  const watchShowAge = watch("showAge", false);
  const onSubmit = (values) => {
    reset({
      firstName: "",
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col mx-auto">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your firstname"
          className="p-4 rounded-sm border-2 border-gray-200"
          {...register("firstName", { required: true, maxLength: 10 })}
        />
        {errors.firstName && (
          <div className="text-red-500">{errors.firstName.message}</div>
        )}
      </div>
      <div className="flex flex-col mx-auto">
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your firstname"
          className="p-4 rounded-sm border-2 border-gray-200"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col mx-auto">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your firstname"
          className="p-4 rounded-sm border-2 border-gray-200"
          {...register("email")}
        />
      </div>

      <div className="flex flex-col mx-auto">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input
            type="text"
            name=""
            id=""
            placeholder="Please enter your age"
          />
        )}
      </div>
      <div>
        <button className="w-full p-4 bg-blue-600 text-white rounded-md mt-2">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
