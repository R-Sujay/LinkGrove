import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linkify Admin",
  description: "Admin dashboard for managing links",
};

export default function PublicLinkinBioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-7xl lg:mx-auto pt-10 px-4 xl:px-0">{children}</main>
  );
}
