import { Inter } from 'next/font/google';

import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

import './globals.css';

const font = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
