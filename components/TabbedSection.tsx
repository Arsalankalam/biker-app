"use client";
import { useState } from "react";
import Image from "next/image";

export default function TabbedSection() {
  const [active, setActive] = useState("Research");

  const tabs = ["Research", "Plan", "Design"];

  return (
    <section className="py-24 px-6 grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto bg-white text-black">
      <div>
        <h2 className="text-xl font-bold mb-4">LOREM IPSUM DOLOR SIT AMET</h2>
        <div className="flex  mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-10 py-1 rounded border ${
                active === tab ? "bg-gray-200 text-black" : "bg-white text-black"
              }`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <p className="text-gray-600">
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque
          donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet.
        </p>
        <a href="#" className="text-blue-600 mt-3 block font-semibold">Check tools → </a>
      </div>
      <Image
        src="/handshake.jpg"
        alt="Handshake"
        width={500}
        height={300}
        className="rounded-lg"
      />
    </section>
  );
}