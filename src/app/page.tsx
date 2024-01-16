import React from "react"
import Image from "next/image"
import anime from "@image/anime.webp"
import logo from "@image/logo.svg"
import LoadMore from "@/app/components/LoadMore"
import { fetchAnime } from "@/app/Actions"

export default async function Home() {
  const data = await fetchAnime(1)

  return (
    <main className="">
      <div className="flex flex-col gap-14">
        <div className="bg-[url(/images/hero.png)] bg-cover">
          <div className="flex items-center justify-between gap-8">
            <div className="flex flex-col gap-4">
              <Image alt="anime" height={100} src={logo} width={100} />
              <h1 className="max-w-96 text-5xl font-bold text-white">
                Explore The <span className="text-red-600">Diverse Realms </span>of Anime Magic
              </h1>
            </div>
            <Image alt="anime" height={400} src={anime} width={400} />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-4xl font-semibold text-white">Explore Anime</h4>
          <div className="flex flex-wrap justify-between gap-8">{data}</div>
        </div>
        <LoadMore />
      </div>
    </main>
  )
}
