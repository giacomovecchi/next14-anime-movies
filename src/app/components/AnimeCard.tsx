import React from "react"
import Image from "next/image"
import { MotionDiv } from "@/app/components/MotionDiv"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy, faStar } from "@fortawesome/free-regular-svg-icons"

export interface AnimeProps {
  name: string
  image: { original: string }
  status: string
  score: string
  episodes: number
}

interface Prop {
  anime: AnimeProps
  index: number
}

const AnimeCard = async ({ anime, index }: Prop) => {
  return (
    <MotionDiv
      animate="visible"
      initial="hidden"
      transition={{ delay: index * 0.25, ease: "easeInOut", duration: "0.5" }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      viewport={{ amount: 0 }}
    >
      <div className="flex max-w-44 flex-col gap-3">
        <div className="relative w-44 rounded">
          <div className="relative h-64 w-full">
            <p className="absolute right-1 top-1 z-10 rounded-xl bg-white px-2 text-red-500 shadow-lg">
              {anime.status}
            </p>
            <Image
              alt={anime.name}
              className="rounded-xl"
              fill={true}
              src={`${process.env.BASE_API_URL}${anime.image.original}`}
            />
          </div>
        </div>
        <p className="truncate font-semibold text-white">{anime.name}</p>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-amber-400">
            <FontAwesomeIcon className="h-4 w-4" icon={faStar} />
            <p>{anime.score}</p>
          </div>
          <div className="flex items-center gap-2 text-red-500">
            <FontAwesomeIcon className="h-4 w-4" icon={faCopy} />
            <p>{anime.episodes}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  )
}

export default AnimeCard
