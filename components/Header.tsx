"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import { Link2, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { AuroraText } from "./magicui/aurora-text";

function Header() {
  return (
    <header className="pt-2">
      <div className="max-w-7xl mx-auto py-4 px-5 sm:px-12 flex justify-between items-center font-satoshi font-extrabold">
        <Authenticated>
          <Link href="/">
            <div className="hidden sm:flex">
              <AuroraText className="sm:text-3xl text-center font-black">
                LinkGrove
              </AuroraText>
            </div>

            <Link2 className="h-9 w-9 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-full sm:hidden" />
          </Link>
          <div className="flex gap-1.5 sm:gap-5 items-center bg-white/50 backdrop-blur-sm border border-white/20 rounded-lg">
            <Link
              href="/dashboard/new-link"
              className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 text-sm sm:text-base rounded-lg font-bold hover:from-blue-600 hover:to-purple-780 transition-all duration-200"
            >
              <Plus className="w-4 h-4" />
              Add Link
            </Link>
            <Button
              asChild
              variant="outline"
              className="border-purple-600 px-5 py-[19px] font-bold text-purple-600 hover:border-purple-700 hover:bg-purple-600 hover:text-white transition-all duration-200 text-sm sm:text-base"
            >
              <Link href="/billing">Billing</Link>
            </Button>
            <UserButton />
          </div>
        </Authenticated>

        <Unauthenticated>
          <div className="hidden sm:flex items-center h-full gap-3 md:gap-10 text-gray-900">
            <Link href="/dashboard" className="text-xl">
              Dashboard
            </Link>
            <Link href="/billing" className="text-xl">
              Billing
            </Link>
          </div>
          <Link
            href="/"
            className="sm:text-3xl text-2xl text-center font-black"
          >
            <AuroraText>LinkGrove</AuroraText>
          </Link>
          <SignInButton mode="modal">
            <Button
              variant="outline"
              className="bg-purple-600 hover:bg-purple-700 rounded-full py-5 : md:px-6 text-lg text-white hover:text-white transition-all duration-200 font-extrabold"
            >
              Get Started <span className="hidden md:inline">for Free</span>
            </Button>
          </SignInButton>
        </Unauthenticated>
      </div>
    </header>
  );
}

export default Header;
