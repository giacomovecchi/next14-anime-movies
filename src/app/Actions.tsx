"use server"

import React from "react"
import AnimeCard, { AnimeProps } from "@/app/components/AnimeCard"

export const fetchAnime = async (page: number) => {
  const response = await fetch(`${process.env.BASE_API_URL}/api/animes?page=${page}&limit=10&order=popularity`)

  const data = await response.json()

  console.log("data", data)

  return data.map((anime: AnimeProps, index: number) => <AnimeCard anime={anime} index={index} key={index} />)
}
