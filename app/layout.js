import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-sans-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono-roboto",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: {
    default: "Simple Software Solutions | MVP Development for Startups",
    template: "%s | Simple Software Solutions",
  },
  description:
    "We design and ship production-ready MVPs for early-stage startups—fast iteration, clear scope, and code you can grow on.",
  keywords: [
    "MVP development",
    "startup software",
    "early-stage",
    "product agency",
    "Next.js",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
