"use client"
import React, { useState } from 'react';

const Modal = ({open, setOpen}) => {

const onClose = () => {
    setOpen(false);
}
  return (
    open &&
    <div className={'modal'}>
    <div className={'modal__overlay'} onClick={onClose}></div>
    <div className={'modal__container'}>
      <button 
        className={'modal__close-btn'} 
        onClick={onClose}
        aria-label="Close modal"
      >
        &times;
      </button>
      <div className={'modal__content'}>
        <h2 className={'modal__title'}>Email sent!</h2>
        <p className={'modal__subtitle'}>Email sent successfully. We will get back to you shortly</p>
          <button 
            className={'modal__action-btn'} 
            onClick={onClose}
            >
            Okay
          </button>
      </div>
    </div>
  </div>
  );
};

export default Modal;