import React from "react";

const Modal = ({ isModalOpen, handleModalClose }) => {
  if (!isModalOpen) return null;
  return (
    <div
      id="modal-body"
      onClick={(e) => e.target.id === "modal-body" && handleModalClose()}
      className="w-full h-[100vh] fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]"
    >
      <div className="w-1/2 rounded-md px-3 py-2 bg-[#fff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-start">
          <h1>Heading</h1>
          <span
            onClick={() => handleModalClose()}
            className="text-red-500 text-[20px] hover:text-red-300 cursor-pointer"
          >
            &times;
          </span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          debitis nesciunt doloribus voluptate dolore? Atque ab necessitatibus
          ullam aperiam, non unde obcaecati dolores! Fugit harum ab ipsum
          voluptate asperiores iste, quasi consectetur odit. Veniam suscipit qui
          nemo, quo nulla odit labore nam, architecto magni molestiae
          repellendus iure. Laborum magni non ex tempore accusantium voluptatum
          commodi, esse error placeat veniam debitis sed ipsum! Vel, libero iure
          incidunt, perferendis eveniet voluptatibus harum, qui voluptatum
          exercitationem iste ipsa expedita asperiores tenetur accusamus ex
          aperiam voluptate id esse maxime accusantium animi magni! Adipisci
          aspernatur minima reiciendis magnam similique dolore. Nam corporis
          dolore cupiditate officia.
        </p>
      </div>
    </div>
  );
};

export default Modal;
