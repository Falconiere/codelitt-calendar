import { Button, Modal } from "components";

type ReminderModalRemoveProps = {
  onClose: () => void;
  onRemove: () => void;
  isOpen: boolean;
};
const ReminderModalRemove = ({
  onClose,
  onRemove,
  isOpen,
}: ReminderModalRemoveProps) =>
  isOpen ? (
    <Modal.Overlay>
      <Modal.Container>
        <Modal.Header onClose={onClose}>Delete reminder</Modal.Header>
        <Modal.Body>Are you sure you want to remove this reminder?</Modal.Body>
        <Modal.Footer>
          <Button variant="destroy" type="button" onClick={onRemove}>
            Delete
          </Button>
          <Button variant="secondary" type="button" onClick={onClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal.Container>
    </Modal.Overlay>
  ) : null;

export { ReminderModalRemove };
