import { useContext } from "react";
import { TemperatureCtx } from "./TemperatureContainer";

const Kelvin = () => {
    const { temperature } = useContext(TemperatureCtx);
    const temperatureInKelvin = temperature !== '' ? +temperature + 273.15 : '';

    return <h3>Kelvin: {temperatureInKelvin}</h3>
}

export default Kelvin;