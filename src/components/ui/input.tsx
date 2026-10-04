import * as React from "react";
import { cn } from "cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-[12px] border border-[#23272a] bg-[#0a0d3a] px-3.5 py-2 text-sm text-white placeholder:text-neutral-400/80 shadow-inner transition-colors",
          "focus-visible:outline-none focus-visible:border-[#5865f2] focus-visible:ring-2 focus-visible:ring-[#5865f2]/40",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
