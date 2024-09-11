"use client";

import localFont from "next/font/local";
import { useState } from "react";

const custom = localFont({
  src: "./fonts/main.otf",
  display: "swap",
});
export default function Home() {
  const [txt, setTxt] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 입력된 값을 대문자로 변환하여 저장
    setTxt(e.target.value.toUpperCase());
  };

  return (
    <main className="flex flex-col gap-40 items-center justify-center w-dvw h-dvh">
      <div className={custom.className}>
        <p className="text-10xl">{txt}</p>
      </div>
      <input
        value={txt}
        onChange={handleChange}
        className="border border-black p-2"
        placeholder="Type En here"
      />
      <p>QUIRK</p>
    </main>
  );
}
