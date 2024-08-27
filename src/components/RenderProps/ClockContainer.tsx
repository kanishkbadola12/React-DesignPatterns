import Clock from "./Clocks";

const ClockContainer = () => {
    return (
        <div className="clock-container">
            <Clock render={(time, format, setFormat) => (
                <>
                    <h1>Current Time in {format} format is: {time}</h1>
                    <div className="hours-format-btn">
                        <button onClick={() => setFormat('12H')}>12H</button>
                        <button onClick={() => setFormat('24H')}>24H</button>
                    </div>
                </>
            )} />
        </div>
    )
}

export default ClockContainer;