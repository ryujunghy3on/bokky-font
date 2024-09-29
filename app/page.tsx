"use client";

import localFont from "next/font/local";
import { useState } from "react";

const custom = localFont({
  src: "./fonts/main.otf",
  display: "swap",
});
export default function Home() {
  const [txt, setTxt] = useState<string>("");

  const maxChars = 25;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value.toUpperCase();

    if (newText.length <= maxChars) {
      setTxt(newText);
    }
  };

  return (
    <div className="relative w-full h-screen">
      <header className="fixed top-0 left-0 w-full h-16 flex justify-between items-center px-8 py-16 z-50">
        <img src="/logo.svg" alt="Logo" className="h-16" />
        <p className="text-white text-2xl">Type in English</p>
      </header>

      <main
        className="flex flex-col gap-40 items-center justify-center w-full h-screen pt-16"
        style={{
          backgroundImage: "url('/bg-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={custom.className}
          style={{
            width: "fit-content",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          <p
            className="text-white text-10xl text-center leading-none tracking-wide"
            style={{ display: "inline-block", maxWidth: "75ch" }}
          >
            {txt}
          </p>
        </div>
        <input
          value={txt}
          onChange={handleChange}
          className="border border-black p-2 fixed inset-0 z-10 opacity-0"
        />
      </main>
    </div>
  );
}
