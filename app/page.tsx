"use client";

import localFont from "next/font/local";
import { useState } from "react";

const custom = localFont({
  src: "./fonts/main.otf",
  display: "swap",
});
export default function Home() {
  const [txt, setTxt] = useState<string>("");

  const maxChars = 27;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value.toUpperCase();

    if (newText.length <= maxChars) {
      setTxt(newText);
    }
  };

  return (
    <main
      className="flex flex-col gap-40 items-center justify-center w-full h-screen"
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
          className="text-white text-10xl text-center leading-none"
          style={{ display: "inline-block", maxWidth: "9ch" }}
        >
          {txt}
        </p>
      </div>
      <input
        value={txt}
        onChange={handleChange}
        className="border border-black p-2 fixed inset-0 z-10 bg-red-500 opacity-0"
        placeholder="Type En here"
      />
    </main>
  );
}
