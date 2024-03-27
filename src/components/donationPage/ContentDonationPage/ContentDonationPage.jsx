"use client";

import { useTranslation } from "react-i18next";

import Button from "../Button/Button";
import Icon from "@/components/Icon/Icon";
import CopyButton from "../CopyButton/CopyButton";
import css from "./ContentDonationPage.module.css";
import { useState } from "react";

const ContentDonationPage = () => {
  const { t } = useTranslation();
  const [contributionType, setContributionType] = useState("one-time");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("UAH");

  const handleContributionTypeChange = (event) => {
    setContributionType(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={css.container}>
      <div className={css.topBlock}>
        <div>
          <picture className={css.monobankImg}>
            <source
              media="(max-width: 959px)"
              srcSet="/img/donation/monobank-320.png"
            />

            <source
              media="(max-width: 1919px)"
              srcSet="/img/donation/monobank-960.png"
            />

            <source
              media="(min-width: 1920px)"
              srcSet="/img/donation/monobank-1920.png"
            />

            <img
              className={css.monobankImg}
              src="/img/donation/monobank-1920.png"
              alt="monobank"
            />
          </picture>
          <Button />
        </div>

        <div className={css.supportBlock}>
          <div className={css.supportInfo}>
            <h2 className={css.firstTitle}>
              {t("donation:supportBlock.firstTitle")}
            </h2>
            <h2 className={css.secondTitle}>
              {t("donation:supportBlock.secondTitle")}
            </h2>
            <p className={css.description}>
              {t("donation:supportBlock.description")}
            </p>
          </div>

          <div className={css.donation}>
            <h1 className={css.title}>{t("donation:donation.title")}</h1>
            <form onSubmit={handleSubmit}>
              <div className={css.radioWrapper}>
                <div className={css.oneTime}>
                  <input
                    className={css.radioInput}
                    type="radio"
                    id="one-time"
                    value="one-time"
                    checked={contributionType === "one-time"}
                    onChange={handleContributionTypeChange}
                  />
                  <label htmlFor="one-time" className={css.label}>
                    {t("donation:donation.oneTime")}
                  </label>
                </div>
                <div className={css.subscription}>
                  <input
                    className={css.radioInput}
                    type="radio"
                    id="subscription"
                    value="subscription"
                    checked={contributionType === "subscription"}
                    onChange={handleContributionTypeChange}
                  />
                  <label htmlFor="subscription" className={css.label}>
                    {t("donation:donation.subscription")}
                  </label>
                </div>
              </div>

              <div className={css.contribution}>
                <div>
                  <input
                    className={css.contributionAmount}
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}
                    required
                  />
                </div>
                <div>
                  <select
                    className={css.contributionCurrency}
                    id="currency"
                    value={currency}
                    onChange={handleCurrencyChange}
                  >
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>
              <button className={css.submitButton} type="submit">
                <Icon className={css.icon} name="icon-banknote" />
                {t("donation:contribution.button")}
              </button>
              <p className={css.submitText}>
                {t("donation:contribution.submitText")}
              </p>
            </form>
          </div>
          <p className={css.cancelText}>
            {t("donation:contribution.cancelText")}
            <span className={css.underline}>LiqPay</span>.
          </p>
        </div>
      </div>

      <div className={css.flex}>
        <div className={css.flexItem}>
          <div className={css.donations}>
          <div className={css.donateInfo}>
            <h2 className={css.firstTitle}>
              {t("donation:donateInfo.firstTitle")}
            </h2>
            <h2 className={css.secondTitle}>
              {t("donation:donateInfo.secondTitle")}
            </h2>
            <div>
              <p className={css.description}>
                {t("donation:donateInfo.description")}
              </p>
              <ul className={css.donateList}>
                <li className={css.donateItem}>
                  {t("donation:donateInfo.donateItem-1")}
                </li>
                <li className={css.donateItem}>
                  {t("donation:donateInfo.donateItem-2")}
                </li>
              </ul>
              <p className={css.description}>
                {t("donation:donateInfo.report")}{" "}
                <a
                  href="https://drukarmy.org.ua/reports"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://drukarmy.org.ua/reports
                </a>
              </p>
            </div>
          </div>

          <ul className={css.requisites}>
            <li className={css.requisitesItem}>
              <p className={css.requisiteName}>
                {t("donation:requisites.requisiteName-1")}
              </p>
              <p className={css.requisiteValue}>
                {t("donation:requisites.requisiteValue-1")}
              </p>
            </li>
            <li className={css.requisitesItem}>
              <p className={css.requisiteName}>
                {t("donation:requisites.requisiteName-2")}
              </p>
              <p className={css.requisiteValue}>
                {t("donation:requisites.requisiteValue-2")}
              </p>
            </li>
            <ul className={css.inner}>
              <li className={css.requisitesItem}>
                <p className={css.requisiteName}>
                  {t("donation:requisites.requisiteName-3")}
                </p>
                <p className={css.requisiteValue}>
                  {t("donation:requisites.requisiteValue-3")}
                </p>
              </li>
              <li className={css.requisitesItem}>
                <p className={css.requisiteName}>
                  {t("donation:requisites.requisiteName-4")}
                </p>
                <p className={css.requisiteValue}>
                  {t("donation:requisites.requisiteValue-4")}
                </p>
              </li>
            </ul>
          </ul>

          <ul className={css.accountsList}>
            <li className={css.accountsItem}>
              <div className={css.copyBlock}>
                <p className={css.accountCurrency}>UAH:</p>
                <CopyButton textToCopy="UA313052990000026000040810747" />
              </div>
              <p className={css.accountIBAN}>
                IBAN: UA313052990000026000040810747
              </p>
            </li>
            <li className={css.accountsItem}>
              <div className={css.copyBlock}>
                <p className={css.accountCurrency}>USD:</p>
                <CopyButton textToCopy="UA733052990000026003020813921" />
              </div>
              <p className={css.accountIBAN}>
                IBAN: UA733052990000026003020813921
              </p>
            </li>
            <li className={css.accountsItem}>
              <div className={css.copyBlock}>
                <p className={css.accountCurrency}>EUR:</p>
                <CopyButton textToCopy="UA743052990000026006040814037" />
              </div>
              <p className={css.accountIBAN}>
                IBAN: UA743052990000026006040814037
              </p>
            </li>
            <li className={css.accountsItem}>
              <div className={css.copyBlock}>
                <p className={css.accountCurrency}>PLZ :</p>
                <CopyButton textToCopy="UA643052990000026003040814416" />
              </div>
              <p className={css.accountIBAN}>
                IBAN: UA643052990000026003040814416
              </p>
            </li>
            <li className={css.accountsItem}>
              <div className={css.copyBlock}>
                <p className={css.accountCurrency}>GBP:</p>
                <CopyButton textToCopy="UA513052990000026001030808683" />
              </div>
              <p className={css.accountIBAN}>
                IBAN: UA513052990000026001030808683
              </p>
            </li>
          </ul>
        </div>
        </div>
        <div className={css.flexItem}>
          <div className={css.crypto}>
            <div className={css.cryptoInfo}>
              <h2 className={`${css.firstTitle} ${css.whiteText}`}>
                {t("donation:cryptoInfo.firstTitle")}
              </h2>
              <h2 className={`${css.secondTitle} ${css.whiteText}`}>
                {t("donation:cryptoInfo.secondTitle")}{" "}
              </h2>
              <p className={css.cryptoInfoDescription}>
                {t("donation:cryptoInfo.description")}
              </p>
            </div>

            <ul className={css.cryptoList}>
              <li className={css.cryptoItem}>
                <div className={css.copyBlock}>
                  <p className={css.cryptoCurrency}>BTC:</p>
                  <CopyButton textToCopy="17ZWxu4Hqd5BhUXmcEEo9t4j86gCnN5uXK" />
                </div>
                <p className={css.cryptoAccount}>
                  17ZWxu4Hqd5BhUXmcEEo9t4j86gCnN5uXK
                </p>
              </li>
              <li className={css.cryptoItem}>
                <div className={css.copyBlock}>
                  <p className={css.cryptoCurrency}>ETH:</p>
                  <CopyButton textToCopy="0x34ced51723a70d6a379a17c9a7da92cde1474192" />
                </div>
                <p className={css.cryptoAccount}>
                  0x34ced51723a70d6a379a17c9a7da92cde1474192
                </p>
              </li>
              <li className={css.cryptoItem}>
                <div className={css.copyBlock}>
                  <p className={css.cryptoCurrency}>ETC:</p>
                  <CopyButton textToCopy="0x46e0d727a64c8e54b75569ea29bfb67cdaa6df6a" />
                </div>
                <p className={css.cryptoAccount}>
                  0x46e0d727a64c8e54b75569ea29bfb67cdaa6df6a
                </p>
              </li>
              <li className={css.cryptoItem}>
                <div className={css.copyBlock}>
                  <p className={css.cryptoCurrency}>TRX:</p>
                  <CopyButton textToCopy="TKznim6haidi3RyrtjMbmxBEDHAL3mJUXc" />
                </div>
                <p className={css.cryptoAccount}>
                  TKznim6haidi3RyrtjMbmxBEDHAL3mJUXc
                </p>
              </li>
              <li className={css.cryptoItem}>
                <div className={css.copyBlock}>
                  <p className={css.cryptoCurrency}>XRP:</p>
                  <CopyButton textToCopy="rse8FikMNLPLWWsnGH7woJkBCfE4YMTazM" />
                </div>
                <p className={css.cryptoAccount}>
                  rse8FikMNLPLWWsnGH7woJkBCfE4YMTazM
                </p>
              </li>
              <li className={css.cryptoItem}>
                <div className={css.copyBlock}>
                  <p className={css.cryptoCurrency}>LTC:</p>
                  <CopyButton textToCopy="LMAmgwvBNsE8XLfkku6NXcHVVZM7jTWYJ8" />
                </div>
                <p className={css.cryptoAccount}>
                  LMAmgwvBNsE8XLfkku6NXcHVVZM7jTWYJ8
                </p>
              </li>
              <li className={css.cryptoItem}>
                <div className={css.copyBlock}>
                  <p className={css.cryptoCurrency}>BNB:</p>
                  <CopyButton textToCopy="bnb1r58qgd6ljwz2cgzpc39fapektzgg95vf8h6e3g" />
                </div>
                <p className={css.cryptoAccount}>
                  bnb1r58qgd6ljwz2cgzpc39fapektzgg95vf8h6e3g
                </p>
              </li>
              <li className={css.cryptoItem}>
                <div className={css.copyBlock}>
                  <p className={css.cryptoCurrency}>XMR:</p>
                  <CopyButton textToCopy="4AGJ3VuR35P6gcjvsQTgwHjGFKifRBce1dC9xtED2xMpfqGvHsM24Y3PHWjC1faL4qF3ZuqfbQGHkFX78wEHnWboBVbfXfF" />
                </div>
                <p className={css.cryptoAccount}>
                  4AGJ3VuR35P6gcjvsQTgwHjGFKifRBce1dC9xtED2xMpfqGvHsM24Y3PHWjC1faL4qF3ZuqfbQGHkFX78wEHnWboBVbfXfF
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDonationPage;
