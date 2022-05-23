import './timer.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../../components/modal/Modal';

const Timer = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="timer">
      <h1>Hey, click on the button to open the modal</h1>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </motion.button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default Timer;
