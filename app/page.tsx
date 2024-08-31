"use client";

import localFont from "next/font/local";
import { useState } from "react";

const custom = localFont({
  src: "./fonts/main.otf",
  display: "swap",
});

export default function Home() {
  const [txt, setTxt] = useState<string>();
  return (
    <main className="flex flex-col gap-40 items-center justify-center w-dvw h-dvh">
      <div className={custom.className}>
        <p className="text-9xl font-bold">{txt}</p>
      </div>
      <input
        value={txt}
        onChange={(e) => {
          setTxt(e.target.value);
        }}
        className=""
      />
      <p>QUIRTK</p>
    </main>
  );
}
