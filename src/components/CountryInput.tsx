import countries from "@/data/countries.json"
import Select from "react-select"
import { useAppSelector } from '@/redux/hooks'
import Country from "@/types/Country"

type CountryInputProps = {
    name: "sourceCountry"|"targetCountry"
    setCountry: (option:Country)=>void
}

export default function({name, setCountry}:CountryInputProps){

    const country = useAppSelector((state)=> state.countriesReducer[name])

    const handleChange = (option:any) => {
        setCountry(option)
    }
    
    return (
        <div className="grid gap-2">
            <label htmlFor={name} className="capitalize">
                {name.split("Country")} country
            </label>
            <Select
                id={name}
                value={country}
                className="text-gray-600 w-[20rem]"
                options={countries}
                getOptionLabel={(c)=>(c.countryCode+" "+c.countryName)} 
                getOptionValue={(c)=>c.countryCode}
                onChange={handleChange}
                instanceId={name}
            />
        </div>
    )
}