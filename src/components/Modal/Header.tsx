type HeaderProps = {
  children: React.ReactNode;
  onClose?: () => void;
};
const Header = ({ children, onClose }: HeaderProps) => {
  return (
    <div className="modal-header py-2">
      <h5 className="modal-title font-semibold text-xl">{children}</h5>
    </div>
  );
};
export { Header };
