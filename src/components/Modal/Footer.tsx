type FooterProps = {
  children: React.ReactNode;
};
const Footer = ({ children }: FooterProps) => (
  <div className="flex gap-2 justify-end py-2">{children}</div>
);

export { Footer };
