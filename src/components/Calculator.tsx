import CountryInput from "./CountryInput";
import {useAppDispatch} from "@/redux/hooks"
import {setSourceCountry, setTargetCountry} from "@/features/country/countrySlice"

export default function(){

    const dispatch =  useAppDispatch()

    return (
        <form className="grid gap-5 mt-5">
            <div className="flex gap-5">
                <CountryInput name="sourceCountry" setCountry={(option)=>dispatch(setSourceCountry(option))} />
                <CountryInput name="targetCountry" setCountry={(option)=>dispatch(setTargetCountry(option))}/>
            </div>
        </form>
    )
}