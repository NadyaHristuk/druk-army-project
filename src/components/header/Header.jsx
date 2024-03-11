"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import BurgerButton from "./BurgerButton/BurgerButton";
import css from "./Header.module.css";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderSettings from "./HeaderSettings/HeaderSettings";
import LoginBtn from "./LoginBtn/LoginBtn";
import Logo from "./Logo/Logo";
import MobileMenu from "./MobileMenu/MobileMenu";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isShowMobile, setIsShowMobile] = useState(false);
  const isMediumTabletEnd = useMediaQuery({maxWidth: 1199.98});
  const pathname = usePathname();

  const handleClickShowMobile = () => {
    setIsShowMobile(prev => !prev);
  }

  // Якщо мобільне меню відкрите то блокуємо скрол
const operateScroll = () => {
  if (typeof window !== "undefined") {
    if(isShowMobile) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'auto';
    }
  }
}
operateScroll();
// Якщо переходимо кудись по меню і змінюється наш URL, то дозволяємо скрол і закриваємо меню
  useEffect(() => {
    setIsShowMobile(false);
  }, [pathname])

  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <Logo />
        <HeaderMenu />
        <div className={css.buttonsBox}>
          <LoginBtn />
          <HeaderSettings/>
        </div>
        <BurgerButton onClick={handleClickShowMobile} isOpen={isShowMobile}/>
      </div>
      {isShowMobile && isMediumTabletEnd && <MobileMenu/>}
    </header>
  );
};

export default Header;
