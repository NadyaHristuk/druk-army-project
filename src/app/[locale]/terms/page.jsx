import TermsImage from "@/components/termsPage/TermsImage/TermsImage";
import TermsTitle from "@/components/termsPage/TermsTitle/TermsTitle";
import TermsGenerals from "@/components/termsPage/TermsGenerals/TermsGenerals";
import css from "@/app/[locale]/terms/terms.module.css";

const Terms = () => {
  return (
    <div className={css.termsPage}>
      <TermsImage />
      <div className={css.containerTerms}>
        <TermsTitle />
        <TermsGenerals />
      </div>
    </div>
  );
};

export default Terms;
