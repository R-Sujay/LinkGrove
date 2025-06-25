import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "LinkGrove",
  description:
    "Linkgrove lets users create and manage a personalized bio page with multiple links, track engagement in real time, and upgrade to premium tiers for advanced customization and analytics.",
  icons: {
    icon: "/convex.svg",
  },
  openGraph: {
    title: "LinkGrove",
    description:
      "Linkgrove lets users create and manage a personalized bio page with multiple links, track engagement in real time, and upgrade to premium tiers for advanced customization and analytics.",
    url: "https://link-grove-rsujays-projects.vercel.app",
    siteName: "LinkGrove",
    type: "website",
    images: [
      {
        url: "/heroImage.svg",
        width: 1200,
        height: 630,
        alt: "LinkGrove - Create your personalized bio page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkGrove",
    description:
      "Linkgrove lets users create and manage a personalized bio page with multiple links, track engagement in real time, and upgrade to premium tiers for advanced customization and analytics.",
    images: ["/heroImage.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi/Satoshi-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/Satoshi-Variable.woff",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/Satoshi-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/Satoshi-VariableItalic.woff2",
      weight: "100 900",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi/Satoshi-VariableItalic.woff",
      weight: "100 900",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi/Satoshi-VariableItalic.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <ClerkProvider dynamic>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </ClerkProvider>

        <Toaster />
      </body>
    </html>
  );
}
