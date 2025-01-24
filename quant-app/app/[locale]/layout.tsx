
import { Locale, routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local'

const poppins = Poppins({ variable: '--font-poppins', weight: ['400'] } as any);

const clashDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/ClashDisplay-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/ClashDisplay-Semibold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/ClashDisplay-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/ClashDisplay-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/ClashDisplay-Light.ttf',
      weight: '300',
      style: 'normal'
    }
  ]
})


const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter_28pt-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Inter_28pt-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Inter_28pt-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ]
});

const ibmPlexSans = localFont({
  src: [
    {
      path: '../../public/fonts/IBMPlexSans-Medium.ttf',
      weight: '500',
      style: 'normal'
    }
  ]
});

const redHatDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/RedHatDisplay-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ]
});

import "./globals.css";
import "@/styles/mainpage.css"
import "@/styles/seoSection.css"
import "@/styles/faqPage.css"
import "@/styles/nextProjectSection.css"
import "@/styles/footer.css"
import "@/styles/talkPopup.css"
import "@/styles/workingProcess.css"
import "@/styles/aboutPage.css"
import "@/styles/contactUsPage.css"
import "@/styles/swiper.css";
import "@/styles/header.css";
import "@/styles/services.css";
import "@/styles/whatWeOfferSection.css";
import "@/styles/main.css"


import Footer from "./_components/Footer";
import AppToolbar from "./_components/AppToolbar"
// import Script from "next/script";

const defaultMetadata = {
  title: "Quant-Apps",
  description: "Generated by create next app",
  author: "Quant Apps",
  url: "https://quant-apps.com/",
  keywords: "web app development, iOS app development, custom solutions, UI/UX",
};

export const metadata: Metadata = {
  title: defaultMetadata.title,
  description: defaultMetadata.description,
  icons: {
    icon: '/favicon.svg'
  },
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "Quant Apps" }],
  keywords: "web app development, iOS app development, custom mobile solutions, app design, UI/UX, Quant Apps projects, app support, innovative apps",
  openGraph: {
    title: "Quant Apps - Custom Web and iOS App Development",
    description: "Discover Quant Apps's expertise in crafting web and iOS applications that drive results for your business. Explore our projects and services.",
    url: "https://quant-apps.com/",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params,
  videoModal,
  talkModal,
}: Readonly<{
  children: React.ReactNode;
  videoModal: React.ReactNode;
  talkModal: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale} className={`${poppins.className} ${clashDisplay.className} ${inter.className} ${ibmPlexSans.className} ${redHatDisplay.className}`}>
      <body
        className="antialiased relative"
      >
        <NextIntlClientProvider messages={messages}>
          {/* <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
          </Script> */}
          <AppToolbar />
          {children}
          {videoModal}
          {talkModal}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}