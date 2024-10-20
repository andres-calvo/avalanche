"use client";

import { Navbar } from "@/components/shared/navbar";
import TrendingCollection from "./trending-collection";
import TopCreators from "./top-creators";
import { HomeBanner } from "./home-banner";
import { NftsHome } from "./nfts-home";
import DiscoverNFTs from "./discover-nft";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HomeBanner />
      <TrendingCollection />
      <TopCreators />
      <NftsHome />
      <DiscoverNFTs />
    </div>
  );
}
