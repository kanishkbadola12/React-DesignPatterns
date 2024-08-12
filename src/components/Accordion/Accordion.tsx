import React, { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionItemTitle from "./AccordionItemTitle";
import AccordionItemContent from "./AccordionItemContent";
import AccordionItemFooter from "./AccordionItemFooter";

type ComposedProperties = {
    Item: React.FC<{ children: React.ReactNode }>
    ItemTitle: React.FC<{ children: React.ReactNode, id: string }>
    ItemContent: React.FC<{ children: React.ReactNode, id: string }>
    ItemFooter: React.FC<{ children: React.ReactNode, id: string }>
}

const AccordionCtx = createContext({
    openItemId: "",
    toggleOpen: (id: string) => {}
});

export const useAccordionContext = () => {
    const ctx = useContext(AccordionCtx);

    if(!ctx) {
        throw new Error('Accordion Contex must be used inside <Accordion></Accordion>')
    }

    return ctx;
}

const Accordion: React.FC<{ children: React.ReactNode }> & ComposedProperties = ({ children }) => {
    const [openItemId, setOpenItemId] = useState("");

    const toggleOpen = (id: string) => {
        setOpenItemId(prevVal => prevVal === id ? "" : id);
    }

    const contextValue = {
        openItemId,
        toggleOpen
    }
    
    return (
        <AccordionCtx.Provider value={contextValue}>
            <div className="accordion-container">{children}</div>
        </AccordionCtx.Provider>
    )
}

Accordion.Item = AccordionItem;
Accordion.ItemTitle = AccordionItemTitle;
Accordion.ItemContent = AccordionItemContent
Accordion.ItemFooter = AccordionItemFooter;

export default Accordion;