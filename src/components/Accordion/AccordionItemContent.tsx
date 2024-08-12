import { useAccordionContext } from "./Accordion";

const AccordionItemContent: React.FC<{ children: React.ReactNode, id: string }> = ({ children, id }) => {
    const { openItemId } = useAccordionContext();

    return <div className={openItemId === id ? "accordion-content open" : "accordion-content close"} >
        {children}
    </div>
}

export default AccordionItemContent;