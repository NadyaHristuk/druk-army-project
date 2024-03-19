"use client";

import { useTranslation } from "react-i18next";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Icon from "@/components/Icon/Icon";
import css from "./CopyButton.module.css";
import { useState } from "react";

const CopyButton = ({ textToCopy }) => {
  const { t } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyClick = () => {
    setShowTooltip(true);

    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  return (
    <CopyToClipboard text={textToCopy}>
      <button className={css.copyButton} onClick={handleCopyClick}>
        <Icon className={css.icon} name="icon-copy" />
        {showTooltip && (
          <span className={css.tooltip}>
            {" "}
            {t("donation:copyButton")}
          </span>
        )}
      </button>
    </CopyToClipboard>
  );
};

export default CopyButton;
