"use client";

import getPPPDataForCountry from "@/data/pppData";

export default function Home() {
  async function getData(){
    const data = await getPPPDataForCountry()
    console.log(data);
  }
  getData()
  return (
    <div>
      hello world
    </div>
  )
}
