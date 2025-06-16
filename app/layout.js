import './globals.css';
import { Inter } from 'next/font/google';
import Nav from '@/components/navigation/Nav_1';
import Footer from '@/components/footer/Footer_1';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Il Molino – Italian Café in Battersea, London',
  description:
    'Il Molino is a cozy Italian café in Battersea, London, offering authentic coffee, pastries, and brunch in a warm and welcoming setting.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
