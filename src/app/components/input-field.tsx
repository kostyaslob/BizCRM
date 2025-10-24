"use client";

import React from "react";
import { Field } from "formik";

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  as?: string;
}

export default function InputField({
  label,
  id,
  name,
  ...rest
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id ?? name} className="mb-2 text-base text-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id ?? name}
        name={name} 
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      />
    </div>
  );
}
