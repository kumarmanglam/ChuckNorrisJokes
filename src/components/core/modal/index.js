import React from "react";
import "./modalStyle.css";

function Modal({ label, joke, handleClick, closeModal, isFetching }) {
  return (
    <div className="modal">
      <h1 className="modal-title">{label}</h1>
      <div className="wrap">
        <div>
          {isFetching ? (
            <div className="loader"></div>
          ) : (
            <div className="joke">"{joke}"</div>
          )}
        </div>
        <button className="next-btn" onClick={() => handleClick()}>
          Next Joke
        </button>
      </div>
      <p className="close" onClick={() => closeModal()}>
        X
      </p>
    </div>
  );
}

export default Modal;
