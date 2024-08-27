import { useAccordionContext } from "./Accordion";

const AccordionItemFooter: React.FC<{ children: React.ReactNode, id: string }> = ({ children, id }) => {
    const { openItemId } = useAccordionContext()

    return <div className={openItemId === id ? "accordion-footer open" : "accordion-footer close"}>{children}</div>
}

export default AccordionItemFooter;