"use client";

import Calculator from "@/components/Calculator";
import Header from "@/components/Header";
import getPPPDataForCountry from "@/data/api/pppData";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { PPPData } from "@/types/PPPData";

import { useAppDispatch } from "@/redux/hooks";
import {
  setSourceCountryPPPData,
  setTargetCountryPPPData,
} from "@/features/ppp/pppSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const { sourceCountry, targetCountry } = useAppSelector(
    (state) => state.countriesReducer
  );
  const { pppSourceCountry, pppTargetCountry } = useAppSelector(
    (state) => state.pppSliceReducer
  );

  const [srcData, setSrcData] = useState<PPPData | null>(null);
  const [tarData, setTarData] = useState<PPPData | null>(null);

  useEffect(() => {
    async function getData() {
      const srcData = await getPPPDataForCountry(sourceCountry.countryName);
      dispatch(setSourceCountryPPPData(srcData));

      const tarData = await getPPPDataForCountry(targetCountry.countryName);
      dispatch(setTargetCountryPPPData(tarData));
    }
    getData();
  }, [sourceCountry, targetCountry, dispatch]);

  return (
    <main className="container max-w-screen-lg text-gray-100 mx-auto px-10">
      <Header />
      <Calculator />
      {JSON.stringify(pppSourceCountry?.results[0])}
      {JSON.stringify(pppTargetCountry?.results[0])}
    </main>
  );
}
