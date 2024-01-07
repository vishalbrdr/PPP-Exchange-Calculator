"use client";

import Calculator from "@/components/Calculator";
import Header from "@/components/Header";
import countries from "@/data/countries.json"
import getPPPDataForCountry from "@/data/api/pppData";

export default function Home() {
  async function getData(){
    const data = await getPPPDataForCountry()
    console.log(data);
  }

  return (
    <main className="container max-w-screen-lg text-gray-100 mx-auto px-10" >
      <Header />
      <Calculator/>
    </main>
  )
}
