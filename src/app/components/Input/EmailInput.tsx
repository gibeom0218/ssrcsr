import React from "react";
import SignUpFormData from "@/types/SignUpFormData";
import { UseFormRegister, FieldError } from "react-hook-form";

interface EmailInputProps {
  register: UseFormRegister<SignUpFormData>;
  error?: FieldError;
}

const EmailInput = ({ register, error }: EmailInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-gray-600">이메일</label>
      <input
        {...register("email", {
          required: "이메일을 입력해주세요.",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "올바른 이메일 형식을 입력해주세요.",
          },
        })}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="example@example.com"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error?.message}</p>}
    </div>
  );
};

export default EmailInput;
