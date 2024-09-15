import { useContext } from "react";
import { TemperatureCtx } from "./TemperatureContainer";

const TemperatureInput = () => {
    const {temperature, setTemperature} = useContext(TemperatureCtx);

    return (
        <div className="temperature-input">
            <h3>Temperature in Celcius</h3>
            <input 
                value={temperature} 
                id="temp" 
                type="text"
                onChange={e => setTemperature(e.target.value)}
            />
        </div>
    )
}

export default TemperatureInput;