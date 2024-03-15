"use client"

import { useEffect, useRef } from "react"
import Icon from "@/components/Icon/Icon"
import css from "./Modal.module.css"

const Modal = ({children, setOpenFirstModal, setOpenSecondModal}) => {
  const modalRef = useRef(null);
  const handleClick = () => setOpenFirstModal ? setOpenFirstModal(false) : setOpenSecondModal(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setOpenFirstModal ? setOpenFirstModal(false) : setOpenSecondModal(false);
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [setOpenFirstModal, setOpenSecondModal]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpenFirstModal ? setOpenFirstModal(false) : setOpenSecondModal(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [setOpenFirstModal, setOpenSecondModal]);

  return (
    <div className={css.backdropModal}>
        <div className={css.modal} ref={modalRef}>
            <button type="button" className={css.closeBtn} onClick={handleClick}>
                <Icon name={'icon-close'} className={css.btnCloseIcon}/>
            </button>
            {children}
        </div>
    </div>
  )
}

export default Modal