import {AccordionBlock} from "@/features/accordion/ui/accordion-block";

export const Accordion = () => {
    return (
        <div className="flex flex-col w-full bg-transparent text-left text-white sm:text-[32px] sml:px-0  text-[24px] font-medium">
            Frequently asked questions
            <AccordionBlock/>
        </div>
    )
}