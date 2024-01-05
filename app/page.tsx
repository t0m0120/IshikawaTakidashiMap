import Link from "@/node_modules/next/link";
import Image from "next/image";
import WaterImage from "../public/images/water.png"
import SuppliesImage from "../public/images/supplies.png"
import SentouImage from "../public/images/sentou.png"

export default function Home() {
  return (
    <div className="flex flex-wrap -m-4">
      {}
      {[
        { src: WaterImage, 
          title: '給水マップ', 
          subtitle: 'WATER', 
          description: 'こちら', 
          url: '/Water'
        },
        { src: SuppliesImage, 
          title: '支援物資拠点マップ', 
          subtitle: 'SUPPLIES', 
          description: 'こちら',
          url: '/Supplies'},
        { src: SentouImage, 
          title: '銭湯', 
          subtitle: 'SENTOU', 
          description: 'こちら',
          url: '/Sentou'},
      ].map((item, index) => (
        <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image className="h-40 rounded w-full object-cover object-center mb-6" src={item.src} alt={item.title}></Image>
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
              {item.subtitle}
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              {item.title}
            </h2>
            <Link href={item.url}>
              <p className="leading-relaxed text-base">
                {item.description}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
