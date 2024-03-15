"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import css from "./TermsImage.module.css";

const TermsImage = () => {
  const isMobileStart = useMediaQuery({ minWidth: 480 });
  const isMobileEnd = useMediaQuery({ maxWidth: 767.98 });
  const isTabletStart = useMediaQuery({ minWidth: 768 });
  const isTabletEnd = useMediaQuery({ maxWidth: 959.98 });
  const isTabletBigStart = useMediaQuery({ minWidth: 960 });
  const isTabletBigEnd = useMediaQuery({ maxWidth: 1199.98 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={css.imageContainer}>
      <Image
        src={
          theme === "light"
            ? "/img/terms/terms-light.webp"
            : "/img/terms/bg-img.webp"
        }
        alt="Макет міської вулиці"
        priority
        width={
          isMobileStart && isMobileEnd
            ? 690
            : isTabletStart && isTabletEnd
            ? 690
            : isTabletBigStart && isTabletBigEnd
            ? 666
            : isDesktop
            ? 864
            : 442
        }
        height={
          isMobileStart && isMobileEnd
            ? 530.67
            : isTabletStart && isTabletEnd
            ? 513.11
            : isTabletBigStart && isTabletBigEnd
            ? 496
            : isDesktop
            ? 643
            : 328.69
        }
        className={theme === 'light' ? css.termsImage : css.termsImageDark}
      />
    </div>
  );
};

export default TermsImage;
