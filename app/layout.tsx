import type { Metadata } from "next";
import { MuseoModerno, Work_Sans } from 'next/font/google';
// import ContextProvider from '@/context';
import "./globals.css";
// import { headers } from "next/headers";


const museoModerno = MuseoModerno({ subsets: ['latin'], variable: '--font-museo-moderno' })
const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-work-sans' })


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const cookies = headers().get('cookie')
  return (
    <html lang="en">
      <body
        className={`${museoModerno.variable} ${workSans.variable} antialiased`}
      >
        {children}
        {/* <ContextProvider cookies={cookies}>{children}</ContextProvider> */}
      </body>
    </html>
  );
}
