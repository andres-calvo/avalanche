import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { EyeIcon, HeartIcon } from "lucide-react"

export default function DiscoverNFTs() {
  const nfts = [
    {
      image: "/discover-nft/women.jpg",
      likes: 140,
      name: "SOFIA IMARI",
      price: 32.97,
      views: 500
    },
    {
      image: "/discover-nft/computer.jpg",
      likes: 100,
      name: "ANDRES",
      price: 30.20,
      views: 250
    },
    {
      image: "/discover-nft/alien.jpg",
      likes: 230,
      name: "ARTURO",
      price: 39.20,
      views: 300
    }
  ]

  return (
    <section className="bg-[#A259FF] py-20 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-[#CFE71A] mb-2">Discover More NFTs</h2>
            <p className="text-white">Explore New Trending NFTs</p>
          </div>
          <Button variant="outline" className="bg-[#A259FF] text-white border-white hover:bg-[#8A48D7]">
            🔍 See All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nfts.map((nft, index) => (
            <Card key={index} className="bg-[#010002] border-[#A259FF] overflow-hidden">
              <CardContent className="p-0 relative">
                <img src={nft.image} alt={nft.name} className="w-full h-64 object-cover" />
                <div className="absolute top-2 right-2 bg-[#010002] bg-opacity-50 rounded-full px-2 py-1 flex items-center">
                  <HeartIcon className="w-4 h-4 text-red-500 mr-1" />
                  <span className="text-white text-sm">{nft.likes}</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{nft.name}</h3>
                <div className="flex justify-end items-center w-full mb-2">
                  <div className="flex items-center text-gray-400">
                    <EyeIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">{nft.views}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="text-[#CFE71A] font-medium">{nft.price} USDC</span>
                  <Button className="bg-[#CFE71A] text-[#010002] hover:bg-[#B8D017]">
                    Buy Now
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full" style={{
        backgroundImage: "linear-gradient(45deg, #A259FF 25%, transparent 25%), linear-gradient(-45deg, #A259FF 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #A259FF 75%), linear-gradient(-45deg, transparent 75%, #A259FF 75%)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
        opacity: 0.1
      }}></div>
    </section>
  )
}