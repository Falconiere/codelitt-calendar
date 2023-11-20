import { NotFound } from "components";
import { useParams } from "react-router-dom";
import { validateParameter } from "./utils";
type RouterValidatorProps = {
  children: React.ReactNode;
};

type Paramkey = keyof typeof validateParameter;
type Params = Record<Paramkey, string>;

const RouterValidator = ({ children }: RouterValidatorProps) => {
  const params = useParams<Params>();
  const isValid = Object.keys(params).every((key) => {
    const value = params[key as Paramkey];
    return validateParameter[key as keyof typeof validateParameter](value);
  });

  if (!isValid) {
    return <NotFound />;
  }

  return <>{children}</>;
};
export { RouterValidator };
