import { forwardRef } from "react";
import { cn } from "utils/tailwind/cn";

type TextAreaProps = {
  label: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, className, error, ...rest }, ref) => {
    return (
      <div className="textArea-block flex flex-col">
        <label htmlFor={label}>{label}</label>
        <textarea
          ref={ref}
          id={label}
          {...rest}
          className={cn(
            className,
            "border border-gray-300 rounded-md px-4 py-2"
          )}
        />
        <div className="text-red-500 text-sm min-h-[20px]">{error}</div>
      </div>
    );
  }
);

export { TextArea };
