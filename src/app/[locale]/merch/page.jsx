import Container from "@/components/Container/Container";
import MerchHero from "@/components/merch/merchHero/merchHero";
import MerchList from "@/components/merch/merchList/merchList";
import MerchOrder from "@/components/merch/merchOrder/merchOrder";
import { Suspense } from "react";
import styles from "./merch.module.css";

const MerchPage = () => {
  return (
    <Container>
      <div className={styles.merchHero}>
        <Suspense fallback={"Loading..."}>
          <MerchHero />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={"Loading..."}>
          <MerchList />
        </Suspense>
      </div>
      <div className={styles.merchOrder}>
        <Suspense fallback={"Loading..."}>
          <MerchOrder />
        </Suspense>
      </div>
    </Container>
  );
};

export default MerchPage;
