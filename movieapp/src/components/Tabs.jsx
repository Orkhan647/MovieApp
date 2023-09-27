"use client"; // Add this line at the top of your file

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Tabs = () => {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')
  console.log(genre, "genre");
  const tabs = [
    {
      name: "Popular",
      url: "popular"
    },
    {
      name: "Top-Rated",
      url: "top_rated"
    },
    {
      name: "Upcoming",
      url: "upcoming"
    },
  ]
  return (
    <div className='p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7'>
      {
        tabs.map((tab, i) => (
          <Link key={tab.url} className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-amber-600" : ""}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>
        ))
      }
    </div>
  )
}

export default Tabs
