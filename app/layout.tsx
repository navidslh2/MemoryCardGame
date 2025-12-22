import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Memory Card Game",
  description: "Navid Salehi project",
  icons:{icon:"/images/favicon.png"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
