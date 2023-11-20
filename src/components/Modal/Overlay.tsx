import { ClassValue } from "clsx";

type OverlayProps = {
  children: React.ReactNode;
  className?: ClassValue;
};
const Overlay = ({ children, className }: OverlayProps) => {
  return (
    <div
      className={`flex items-center justify-center fixed inset-0 bg-[rgba(0,0,0,0.5)] ${className}`}
    >
      {children}
    </div>
  );
};
export { Overlay };
