type ContainerProps = {
  children: React.ReactNode;
};
const Container = ({ children }: ContainerProps) => (
  <div className="bg-white px-4 py-2 m-10 rounded-md shadow-2xl grid gap-2">
    {children}
  </div>
);
export { Container };
