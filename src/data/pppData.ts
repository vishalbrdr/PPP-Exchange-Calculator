import {PPPData} from '../types/PPPData';
const PPP_BASE_URL = process.env.NEXT_PUBLIC_PPP_BASE_URL

async function getPPPDataForCountry() {
  const response = await fetch(`${PPP_BASE_URL}`);
  const data:PPPData = await response.json();
  return data;
}

export default getPPPDataForCountry;