import { useAccordionContext } from "./Accordion";

const AccordionItemTitle: React.FC<{ children: React.ReactNode, id: string }> = ({ children, id }) => {
    const { toggleOpen } = useAccordionContext();
    
    return <div onClick={() => toggleOpen(id)} className="accordion-title">{children}</div>
}

export default AccordionItemTitle;