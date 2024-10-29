import React from "react";
import SignUpFormData from "@/types/SignUpFormData";
import { UseFormRegister, FieldError } from "react-hook-form";

interface PasswordInputProps {
  register: UseFormRegister<SignUpFormData>;
  error?: FieldError;
}

const PasswordInput = ({ register, error }: PasswordInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-gray-600">비밀번호</label>
      <input
        type="password"
        {...register("password", {
          required: "비밀번호를 입력해주세요.",
          minLength: {
            value: 8,
            message: "비밀번호는 최소 8자 이상이어야 합니다.",
          },
        })}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="비밀번호"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error?.message}</p>}
    </div>
  );
};

export default PasswordInput;
