
import { Locale, routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import "./globals.css";
import "@/src/style/main.css"
import "@/src/style/mainpage.css"
import "@/src/style/seoSection.css"
import "@/src/style/faqPage.css"
import "@/src/style/nextProjectSection.css"
import "@/src/style/footer.css"
import "@/src/style/talkPopup.css"
import "@/src/style/workingProcess.css"
import "@/src/style/aboutPage.css"
import "@/src/style/contactUsPage.css"

import Footer from "@/src/components/Footer";
import AppToolbar from "@/src/components/AppToolbar"
// import LightTheme from "@/src/hoc/Theme/LightTheme/LightTheme";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
        {/* <LightTheme> */}
          <AppToolbar />
          {children}
          <Footer />
        {/* </LightTheme> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}