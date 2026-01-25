import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <div className="bg-[var(--card-tertiary-foreground)] w-full h-full flex flex-col items-center py-20 px-5 sm:px-0">
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-3xl space-y-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg sm:text-xl font-semibold">
            Why should I join?
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed">
            It is an opportunity to work with a group of hardworking and
            dedicated individuals serving the Lasallian student body. You will
            not only gain experiences, but also memories to remember in your
            stay in DLSU.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg sm:text-xl font-semibold">
            What is the application process like? Will there be interviews?
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed">
            Yes, after completing the application forms, there will be a short
            screening which will be conducted by the executive committee of the
            respective unit.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg sm:text-xl font-semibold">
            Do I need prior experience or specific skills to apply?
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed">
            Requirements vary depending on the unit or committee. Some roles may
            require specific tools or materials, while others are open to
            applicants with no prior experience. Applicants are encouraged to
            review the specific qualifications and requirements listed for each
            unit or committee before applying.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg sm:text-xl font-semibold">
            What kind of work and responsibilities can I expect?
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed">
            We highly recommend you view the Primers of each Government Unit, as
            there may be one that best suits your skills or interests. You will
            find primers within the section of each unit on the website.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg sm:text-xl font-semibold">
            Who can join the University Student Government (USG)?
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed">
            All currently enrolled students are welcome to apply, as long as
            they do not exceed the maximum of two (2) USG positions, do not hold
            conflicting roles across the Legislative, Executive, and Independent
            branches, and are not members of any Student Media Organization
            (SMO).
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
