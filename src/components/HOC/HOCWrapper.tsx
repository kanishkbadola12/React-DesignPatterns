import { useState } from "react";
import PlainText from "./PlainText";
import withCard from "./WithCard";

const HOCWrapper = () => {
    const [randomId, setRandomId] = useState(0);

    const generateRandomId = () => {
        setRandomId(Math.floor((Math.random() * 100) % 10));
    }

    const resetId = () => {
        setRandomId(0);
    }

    const EnhancedPlainText = withCard(PlainText);

    return (
        <EnhancedPlainText
            generateRandomId={generateRandomId} 
            id={randomId} 
            resetId={resetId}
        />
    )
}

export default HOCWrapper;