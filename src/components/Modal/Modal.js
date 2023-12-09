import Modal from 'react-modal';

const customStyles = {
  overlay: { zIndex: 2 },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export const ModalAdverts = ({ onOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={onOpen}
      onRequestClose={onClose}
      style={customStyles}
      onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      onAfterClose={() => (document.body.style.overflow = 'unset')}
    >
      {children}
    </Modal>
  );
};
