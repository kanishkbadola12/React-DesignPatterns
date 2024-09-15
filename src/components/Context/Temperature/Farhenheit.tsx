import { useContext } from "react";
import { TemperatureCtx } from "./TemperatureContainer";

const Farhenheit = () => {
    const { temperature } = useContext(TemperatureCtx);
    const temperatureInFarhenheit = temperature !== '' ? +temperature * 9/5 + 32 : '';

    return <h3>Farhenheit: {temperatureInFarhenheit}</h3>
}

export default Farhenheit;