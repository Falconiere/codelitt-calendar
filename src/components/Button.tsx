import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "utils/tailwind/cn";

const variants = {
  primary: "bg-mediumBlue text-white",
  secondary: "bg-gray text-white",
  tertiary:
    "bg-gradient-to-r from-[#FF465D] to-[#BC46BA] shadow-cardShadow text-white rounded-md",
  edit: "flex items-center justify-center text-center w-[36px] h-[36px] bg-gradient-to-r from-[#3BC6FB] to-[#0FC] shadow-cardShadow text-white rounded-full p-0",
  text: "px-0 py-0 text-sm text-gray-500 hover:text-gray-900",
  destroy: "bg-error text-white",
};

type Variant = keyof typeof variants;
type ButtonProps<C extends ElementType = "button"> = {
  as?: C;
  variant?: Variant;
  children?: ReactNode;
} & ComponentPropsWithoutRef<C>;

const Button = <C extends ElementType = "button">({
  as,
  variant = "primary",
  className,
  ...rest
}: ButtonProps<C>) => {
  const Component = as ?? "div";
  return (
    <Component
      {...rest}
      className={cn(
        "cursor-pointer px-8 py-3 rounded-md text-center hover:transform hover:scale-105 transition-all",
        variants[variant],
        className
      )}
    />
  );
};

export { Button };
