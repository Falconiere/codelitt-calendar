import { forwardRef } from "react";
import { cn } from "utils/tailwind/cn";

type InputProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, error, ...rest }, ref) => {
    return (
      <div className="input-block flex flex-col">
        <label htmlFor={label} className="text-darkerGray text-lg">
          {label}
        </label>
        <input
          ref={ref}
          type="text"
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

export { Input };
