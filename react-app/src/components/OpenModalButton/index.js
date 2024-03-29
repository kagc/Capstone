// frontend/src/components/OpenModalButton/index.js
import React from 'react';
import { useModal } from '../../context/Modal';
import './OpenModalButton.css'

export const OpenModalButton = function({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose // optional: callback function that will be called once the modal is closed
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (typeof onButtonClick === 'function') onButtonClick();
    if (typeof onModalClose === 'function') setOnModalClose(onModalClose);
    setModalContent(modalComponent);
  };

  return (
    <button className='unpublish-button' onClick={(e) => {
        e.preventDefault()
        onClick()}}>{buttonText}</button>
  );
}

export const OpenModalButtonComment = function({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose // optional: callback function that will be called once the modal is closed
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (typeof onButtonClick === 'function') onButtonClick();
    if (typeof onModalClose === 'function') setOnModalClose(onModalClose);
    setModalContent(modalComponent);
  };

  return (
    <button className='ud-comment-buttons' onClick={(e) => {
        e.preventDefault()
        onClick()}}>{buttonText}</button>
  );
}

// export default OpenModalButton; 