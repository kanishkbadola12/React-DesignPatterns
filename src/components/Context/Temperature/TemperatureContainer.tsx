import { createContext, useReducer } from "react";
import Farhenheit from "./Farhenheit";
import TemperatureInput from "./Input";
import Kelvin from "./Kelvin";

export const TemperatureCtx = createContext({
    temperature: '',
    setTemperature: (temperature: string) => { }
});

interface TemperatureInterface {
    temperature: '';
    setTemperature: (temperature: string) => void
}

const TemperatureConverter = () => {
    const temperatureReducer = (state: TemperatureInterface, action) => {
        switch (action.type) {
            case 'UPDATED_TEMPERATURE':
                return {
                    ...state,
                    temperature: action.payload
                }
            default:
                return state;
        }
    }

    const setTemperature = (temperature: string) => {
        temperatureDispatch({
            type: 'UPDATED_TEMPERATURE',
            payload: temperature
        });
    }

    const [temperatureState, temperatureDispatch] = useReducer(temperatureReducer, {
        temperature: '',
        setTemperature
    });

    return (
        <div className="temperature-converter">
            <h1>Temperature Converter</h1>
            <TemperatureCtx.Provider value={temperatureState}>
                <TemperatureInput />
                <Kelvin />
                <Farhenheit />
            </TemperatureCtx.Provider>
        </div>
    )
}

export default TemperatureConverter;