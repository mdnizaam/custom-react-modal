import { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal isModalOpen={isModalOpen} handleModalClose={handleModalClose}/>
      <div className="flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-pink-700 p-2 rounded-md"
        >
          Modal Open
        </button>
      </div>
    </div>
  );
};

export default App;
