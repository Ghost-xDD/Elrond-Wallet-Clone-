import './modal.css';
import { motion } from 'framer-motion';

const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <motion.button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </motion.button>
        </div>
        <div className="title">
          <h1>Are you sure you want to continue?</h1>
        </div>
        <div className="body">
          <p>The next page is awesome! You should move forward</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
            style={{ backgroundColor: 'crimson' }}
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
