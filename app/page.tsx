"use client";
import { useAccount } from "wagmi";
export default function Home() {
  const { isConnected } = useAccount()
  console.log(isConnected)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <w3m-button />
    </div>
  );
}
