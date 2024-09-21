import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// favicon은 app 최상위에 넣으면 됨
const mainFont = localFont({
  src: "../public/font/Pretendard-Regular.woff",
  variable: "--font-pretendard", // <- 폰트 적용시 해당 객체 넣기
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Assembly",
  description: "스터디의 모든 것",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${mainFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
