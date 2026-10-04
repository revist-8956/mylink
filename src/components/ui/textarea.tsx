import * as React from "react";
import { cn } from "cn";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-[12px] border border-[#23272a] bg-[#0a0d3a] px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-400/80 shadow-inner transition-colors resize-none",
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
Textarea.displayName = "Textarea";

export { Textarea };
