import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { RocketIcon } from "lucide-react"

export default function TopCreators() {
  const creators = [
    { rank: 1, name: "Keepitreal", sales: 3000, avatar: "/creators/1.png" },
    { rank: 2, name: "DigiLab", sales: 250, avatar: "/creators/2.png" },
    { rank: 3, name: "GravityOne", sales: 100, avatar: "/creators/3.png" },
    { rank: 4, name: "Juanie", sales: 10, avatar: "/creators/4.png" },
  ]

  return (
    <section className=" py-20 relative overflow-hidden lg:min-h-[743px] flex flex-col justify-center">
      <img src="/gradients/top-creators.svg" className="absolute top-0 z-0 w-full " />

      <div className="container mx-auto relative z-10 ">
        <div className="flex justify-between items-center mb-12">
          <div className="font-mono">
            <h2 className="text-4xl font-bold text-[#CFE71A] mb-2">Top Creators</h2>
            <p className="text-white">Checkout Top Rated Creators On The NFT Marketplace</p>
          </div>
          <Button variant="ghost" className=" text-white border-[#A259FF] border rounded-xl hover:bg-[#8A48D7]">
            <RocketIcon className="mr-2 h-4 w-4 text-purple" /> View Rankings
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {creators.map((creator) => (
            <Card key={creator.rank} className="p-2 bg-[#1B1B21]/55 border-none max-w-[240px]">
              <CardContent className=" p-0 relative font-mono">
                <div className="absolute top-2 left-2 bg-[#2A2A2A] text-softGreen rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {creator.rank}
                </div>
                <div className="flex flex-col items-center text-center font-mono">
                  <Avatar className="w-24 h-24 mb-4 mt-2">
                    <AvatarImage src={creator.avatar} alt={creator.name} />
                  </Avatar>
                  <h3 className="text-xl font-semibold text-white mb-2">{creator.name}</h3>
                  <p className="text-sm  text-softGreen mb-2">
                    Total Sales: <span className="text-white font-medium">{creator.sales} USDC</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}