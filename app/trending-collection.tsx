import { Card, CardContent } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
export default function TrendingCollection() {
    const collections = [
        {
            mainImage: "/home-collection/1-full.jpg",
            smallImages: ["/home-collection/1-1-small.jpg", "/home-collection/1-2-small.jpg"],
            name: "DSGN CYBERPUNK",
            creator: "MR.PUNK",
            creatorAvatar: "/home-collection/1-full.jpg",
            items: "1025+"
        },
        {
            mainImage: "/home-collection/2-full.jpg",
            smallImages: ["/home-collection/2-1-small.jpg", "/home-collection/2-2-small.jpg"],
            name: "DSGN FUTURE CITY",
            creator: "MR.CITY",
            creatorAvatar: "/home-collection/2-full.jpg",
            items: "1025+"
        },
        {
            mainImage: "/home-collection/3-full.jpg",
            smallImages: ["/home-collection/3-1-small.jpg", "/home-collection/3-2-small.jpg"],
            name: "DSGN POKEMON",
            creator: "MRS.ASHIPALETA",
            creatorAvatar: "/home-collection/3-full.jpg",
            items: "1025+"
        }
    ]

    return (
        <section className=" py-20 relative overflow-hidden">
            <img src="/gradients/trending-collection.svg" className="absolute top-0 z-0 w-full h-full " />

            <div className="container mx-auto relative z-10">
                <h2 className="text-4xl font-bold text-[#CFE71A] mb-2 font-work ">Trending Collection</h2>
                <p className="text-white mb-12 font-work font-normal text-xl">Checkout Our Weekly Updated Trending Collection.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collections.map((collection, index) => (
                        <Card key={index} className="bg-[#1B1B21]/55 border-none text-white  overflow-hidden max-w-[447px] ">
                            <CardContent className="!p-0">
                                <img src={collection.mainImage} alt={collection.name} className="w-full h-[396px] object-cover rounded-lg mb-4" />
                                <div className="flex space-x-4 mb-4 p-4">
                                    {collection.smallImages.map((img, i) => (
                                        <img key={i} src={img} alt={`${collection.name} ${i + 1}`} className=" flex-1 h-20 object-cover rounded-lg" />
                                    ))}
                                    <div className="h-20 bg-purple rounded-lg flex flex-1 items-center justify-center">
                                        <span className="text-white font-bold">1025+</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold mb-2 px-4 font-work ">{collection.name}</h3>
                                <div className="flex items-center space-x-2 p-4 py-6">
                                    <Avatar>
                                        <img src={collection.creatorAvatar} alt={collection.creator} />
                                    </Avatar>
                                    <span className={`text-3xl font-work font-bold text-[#CFE71A]`}>{collection.creator}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}