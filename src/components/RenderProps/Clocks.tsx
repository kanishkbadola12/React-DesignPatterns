import { useEffect, useState } from "react";

const Clock = ({ render }) => {
    const [time, setTime] = useState('');
    const [format, setFormat] = useState('12H');

    useEffect(() => {
        const timer12H = setInterval(() => {
            const [hours, minutes] = new Date().toLocaleTimeString('en-US').split(':');
            const modifier = new Date().toLocaleTimeString('en-US').split(' ')[1];

            setTime(`${hours}:${minutes} ${modifier}`);
        }, 1000)

        return () => {
            clearInterval(timer12H);
        }
    }, [time]);

    useEffect(() => {
        console.log(format);
    }, [format])


    return render(time, format, setFormat);
}

export default Clock;