import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkGrove",
  description:
    "Linkgrove lets users create and manage a personalized bio page with multiple links, track engagement in real time, and upgrade to premium tiers for advanced customization and analytics.",
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
