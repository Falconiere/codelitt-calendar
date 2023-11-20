import { ReactComponent as CodelittLogo } from "assets/images/logo.svg";

type WrapperProps = {
  children?: React.ReactNode;
};
const Wrapper = ({ children }: WrapperProps) => {
  return (
    <main className="p-4 sm:p-10">
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        <a href="/">
          <CodelittLogo />
        </a>
        {children}
      </div>
    </main>
  );
};
export { Wrapper };
