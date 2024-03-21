"use client";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <Navbar />
      <Hero />
    </main>
  );
}
