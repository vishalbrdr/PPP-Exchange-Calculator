"use client";

import Calculator from "@/components/Calculator";
import Header from "@/components/Header";
import countries from "@/data/countries.json"
import getPPPDataForCountry from "@/data/api/pppData";
import { useEffect, useState } from "react";
import { PPPData } from "@/types/PPPData";

export default function Home() {
  const [srcData, setSrcData] = useState<PPPData|null>(null)
  const [tarData, setTarData] = useState<PPPData|null>(null)
  useEffect(()=>{
    async function getData(){
      const srcData = await getPPPDataForCountry("India")
      setSrcData(srcData)
      const tarData = await getPPPDataForCountry("United States")
      setTarData(tarData)
    }
    getData()
  },[])

  return (
    <main className="container max-w-screen-lg text-gray-100 mx-auto px-10" >
      <Header />
      <Calculator/>
      {JSON.stringify(tarData?.results[0])}
    </main>
  )
}
