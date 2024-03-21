"use client"

import { useEffect, useRef } from "react"
import Icon from "@/components/Icon/Icon"
import css from "./ModalCreators.module.css"

const ModalCreators = ({children, setIsShowCreators}) => {
    const modalRef = useRef(null);
    const handleClick = () => setIsShowCreators(false);
  
    useEffect(() => {
      const handleKeyPress = (e) => {
        if (e.key === 'Escape') {
            setIsShowCreators(false);
        }
      };
      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }, [setIsShowCreators]);
  
    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsShowCreators(false);
        }
      };
  
      document.addEventListener('click', handleOutsideClick);
  
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [setIsShowCreators]);
  
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

export default ModalCreators