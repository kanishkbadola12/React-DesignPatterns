import React from "react";

type WithCardProps = {
    generateRandomId: () => void;
    resetId: () => void;
    id: number;
}

const withCard = (BaseComponent: React.FC<WithCardProps>) => {
    return (props: WithCardProps) => {
        return (
            <div className="hoc-wrapper">
                <BaseComponent {...props} />
                <div className="cta">
                    <button onClick={props.resetId}>Reset</button>
                    <button onClick={props.generateRandomId}>Generate</button>
                </div>
            </div>
        );
    };
};

export default withCard;
