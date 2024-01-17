import {PPPData} from '../../types/PPPData';

const PPP_BASE_URL = process.env.NEXT_PUBLIC_PPP_BASE_URL

async function getPPPDataForCountry(countryName:string){
  const response = await fetch(`${PPP_BASE_URL}?where=country="${countryName}"&limit=30`);
  const data:PPPData = await response.json();

  data.results.sort((a, b) => parseInt(b.year) - parseInt(a.year))
  
  return data;
}

export default getPPPDataForCountry;