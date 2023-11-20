import { Button } from "./Button";

const NotFound = () => (
  <div className="h-[100vh] p-10 flex">
    <div className="bg-white text-center m-auto shadow-6xl gap-4 rounded-2xl w-full max-w-5xl py-20">
      <div className="pb-10">
        <h1 className="text-7xl">404</h1>
        <p className="text-2xl">Page not found</p>
      </div>
      <Button as="a" href="/" variant="tertiary">
        Go back home
      </Button>
    </div>
  </div>
);
export { NotFound };
