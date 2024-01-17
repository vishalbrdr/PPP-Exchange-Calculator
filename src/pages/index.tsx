"use client";

import Calculator from "@/components/Calculator";
import Header from "@/components/Header";
import getPPPDataForCountry from "@/data/api/pppData";
import { useEffect, useState } from "react"
import { useAppSelector } from '@/redux/hooks';
import { PPPData } from "@/types/PPPData";

export default function Home() {

  const {sourceCountry, targetCountry } = useAppSelector((state)=> state.countriesReducer)

  const [srcData, setSrcData] = useState<PPPData|null>(null)
  const [tarData, setTarData] = useState<PPPData|null>(null)

  useEffect(()=>{
    async function getData(){
      const srcData = await getPPPDataForCountry(sourceCountry.countryName)
      setSrcData(srcData)
      const tarData = await getPPPDataForCountry(targetCountry.countryName)
      setTarData(tarData)
    }
    getData()
  },[sourceCountry, targetCountry])

  return (
    <main className="container max-w-screen-lg text-gray-100 mx-auto px-10" >
      <Header />
      <Calculator/>
      {JSON.stringify(srcData?.results[0])}
      {JSON.stringify(tarData?.results[0])}
    </main>
  )
}
