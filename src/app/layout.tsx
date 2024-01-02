import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter, Noto_Sans_KR } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});
const noto = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yoga',
  description: 'yoga quiz app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body lang='kr' className={noto.className}>
        {children}
      </body>
    </html>
  );
}
