"use client";

import { forwardRef, useState, type InputHTMLAttributes } from "react";

import { EyeIcon, EyeOffIcon } from "@/components/icons";

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput({ className = "", ...props }, ref) {
    const [visible, setVisible] = useState(false);

    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          type={visible ? "text" : "password"}
          className={`w-full rounded-[12px] border border-rule bg-bg px-4 py-3 pr-12 text-sm font-normal text-ink outline-none transition focus:border-hi ${className}`}
        />
        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
          className="absolute inset-y-0 right-0 inline-flex w-12 items-center justify-center text-ink-3 transition hover:text-hi-deep focus:text-hi-deep focus:outline-none"
        >
          {visible ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
        </button>
      </div>
    );
  },
);
