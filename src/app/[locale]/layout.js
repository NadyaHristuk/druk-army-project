"use client";
import { SessionProvider } from "next-auth/react";
import { Providers } from "@/app/[locale]/providers";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import initTranslations from "@/app/i18n";
import { GlobalProvider } from "@/app/GlobalProvider";
import TranslationsProvider from "@/app/TranslationsProvider";
import Header from "@/components/header/Header.jsx";
import Footer from "@/components/footer/Footer.jsx";
import Loading from "./loading";
import "../globals.css";

const i18nNamespaces = [
  "header",
  "footer",
  "terms",
  "notfound",
  "about",
  "home",
  "vacancies",
  "how-it-works",
  "technical-works",
  "donation",
];

export default function RootLayout({ children, params: { locale }, session }) {
  const { _, resources } = initTranslations(locale, i18nNamespaces);

  const router = useRouter();

  // Paths where Header and Footer should be hidden
  const hideLayoutOnRoutes = ["/dashboard", "/login"];

  const showLayout = hideLayoutOnRoutes.includes(router.pathname);
  console.log(showLayout);
  return (
    <SessionProvider session={session}>
      <html lang="uk">
        <body>
          <Providers>
            <TranslationsProvider
              namespaces={i18nNamespaces}
              locale={locale}
              resources={resources}
            >
              <GlobalProvider>
                {showLayout && <Header />}
                <main>
                  <Suspense fallback={<Loading />}>{children}</Suspense>
                </main>
                {showLayout && <Footer />}
              </GlobalProvider>
            </TranslationsProvider>
          </Providers>
        </body>
      </html>
    </SessionProvider>
  );
}
