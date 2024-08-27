import React from "react";


const AccordionItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="accordion-item">{children}</div>
}

export default AccordionItem;