import Header from "@/components/Header";
import { PricingTable } from "@clerk/nextjs";
import React from "react";

function BillingPage() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl lg:mx-auto pt-10 px-4 xl:px-0">
        <h1 className="text-3xl font-bold mb-10 text-center md:text-left">
          Manage your billing
        </h1>

        <PricingTable />
      </main>
    </div>
  );
}

export default BillingPage;
