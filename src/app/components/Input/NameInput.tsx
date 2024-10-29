import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface NameInputProps {
  register: UseFormRegister<any>;
  error?: FieldError;
}

const NameInput = ({ register, error }: NameInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-gray-600">이름</label>
      <input
        {...register("name", { required: "이름을 입력해주세요." })}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="이름"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error?.message}</p>}
    </div>
  );
};

export default NameInput;
