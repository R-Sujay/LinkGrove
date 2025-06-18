import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { AuroraText } from "@/components/magicui/aurora-text";
import Testimonial from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { auth } from "@clerk/nextjs/server";
import { Label } from "@radix-ui/react-label";
import { Github, Linkedin, Umbrella } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className=" relative min-h-screen font-satoshi">
      {/* <SmoothCursor /> */}

      <Header />

      <Hero />

      <Features />

      <Testimonial />

      <footer className="bg-background py-5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center">
            <div className="mb-8 ">
              <Link
                href="/"
                className="sm:text-3xl text-2xl text-center font-black"
              >
                <AuroraText>LinkGrove</AuroraText>
              </Link>
            </div>
            <nav className="mb-8 flex flex-wrap font-bold justify-center gap-6">
              <Link href="/dashboard" className="text-xl hover:text-primary">
                Dashboard
              </Link>
              <Link href="/billing" className="text-xl hover:text-primary">
                Billing
              </Link>
            </nav>
            <div className="mb-8 flex space-x-4">
              <Link href="https://github.com/R-Sujay">
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.upwork.com/freelancers/~010c8e53bf15ecc34a">
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                  </svg>
                  <span className="sr-only">Upwork</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/sujay-rajesh/">
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://sujay-r.vercel.app/">
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <Image
                    src="https://cdn.sanity.io/images/qxvufyyr/production/7d1a366ee401ad93c3617d1c6f4835f54ab9dad6-447x405.jpg"
                    alt="Profile"
                    width={48}
                    height={48}
                    className="w-full h-full"
                    objectFit="cover"
                  />
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                &copy; 2024 Sujay Rajesh. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
