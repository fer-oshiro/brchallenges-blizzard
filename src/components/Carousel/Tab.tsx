import useCarouselTab from "@store/carousel"
import Image from "next/image"
import { banner } from "@constants/banner"

export default function Carousel() {
  const { toggle, game } = useCarouselTab((state) => state)

  return (
    <div className="flex lg:flex-col space-x-5 lg:space-y-6 lg:space-x-0">
      {banner.map((bannerOption) => (
        <button
          onClick={() => toggle(bannerOption.name)}
          key={bannerOption.name}
        >
          <Image
            src={bannerOption.icon}
            width="70"
            height="70"
            alt="Logo"
            className={bannerOption.name === game ? "" : 'opacity-70 grayscale relative -z-10'}
          />
        </button>
      ))}
    </div>
  )
}