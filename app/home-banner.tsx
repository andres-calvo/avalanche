import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HomeBanner() {
  return (
    <section className="container mx-auto mt-20 flex justify-between items-center">
      <div className="max-w-2xl ">
        <h1 className="text-6xl font-bold mb-4 font-museo">
          Discover and <span className="text-softGreen">Collect The Best</span> NFTs Digital Art.
        </h1>
        <p className="text-xl mb-8 font-work">
          There Are Thousands Of NFTs Waiting For You. <span className="text-softGreen font-bold">Find, Buy, And Collect What You Love!</span>
        </p>
        <Button className="bg-purple text-white hover:bg-purple/80  text-lg px-8 py-6">
          🚀 Get Started
        </Button>
        <div className="flex space-x-8 mt-12 font-work">
          <div>
            <h3 className="text-2xl font-bold">240k+</h3>
            <p>Total Sale</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">100k+</h3>
            <p>Auctions</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">240k+</h3>
            <p>Artists</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 ">
        <Image alt="Banner" src={"/HomeBannerCards.svg"} className="w-full" width={500} height={400} />
      </div>
    </section>
  )
}