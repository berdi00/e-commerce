"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <ShoppingCartProvider>
          <main className="relative min-h-screen mx-auto max-w-screen-2xl md:px-5">
            <Navbar />
            <div className="mb-[50px]">{children}</div>
            <Footer />
          </main>
        </ShoppingCartProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
