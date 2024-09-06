import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/header";

//favicon은 app 최상위에 넣으면 됨
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans", // <- 폰트 적용시 해당 객체 넣기
//   weight: "100 900",
// });

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
      <body className={``}>
        <Header />
        {children}
      </body>
    </html>
  );
}
