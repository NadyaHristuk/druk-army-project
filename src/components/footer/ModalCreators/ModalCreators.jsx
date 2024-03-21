"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Icon from "@/components/Icon/Icon"
import bgImg1 from "/public/img/createdBy/bgmodal1.webp";
import bgImg2 from "/public/img/createdBy/bgmodal2.webp";
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
              <Image src={bgImg1} alt="background" width={520} height={324} className={css.bgModal1}/>
              <Image src={bgImg2} alt="background" width={814} height={350} className={css.bgModal2}/>
              <button type="button" className={css.closeBtn} onClick={handleClick}>
                  <Icon name={'icon-close'} className={css.btnCloseIcon}/>
              </button>
              {children}
          </div>
      </div>
    )
}

export default ModalCreators