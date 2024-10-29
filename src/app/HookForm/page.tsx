"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SignUpFormData from "@/types/SignUpFormData";
import NameInput from "../components/Input/NameInput";
import EmailInput from "../components/Input/EmailInput";
import PasswordInput from "../components/Input/PasswordInput";
import InputTitle from "../components/Input/InputTitle";
import InputButton from "../components/Input/InputButton";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"
      >
        <InputTitle />
        {/*  `register`와 `errors`를 각 컴포넌트에 전달하여 폼 상태와 연결 */}
        <NameInput register={register} error={errors.name} />
        <EmailInput register={register} error={errors.email} />
        <PasswordInput register={register} error={errors.password} />
        <InputButton />
      </form>
    </div>
  );
}

export default SignUpForm;
