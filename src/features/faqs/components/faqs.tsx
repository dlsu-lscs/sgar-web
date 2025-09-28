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
            Do I need previous experience in leadership roles?
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed">
            No, previous experience is not required, and the application is open
            to all interested students. This will be your chance to further
            nurture your skills in leadership, competency, and preferred
            specializations.
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
            When will the results be released?
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed">
            Results of your application will be released on{" "}
            <strong>October 20, 2025</strong> through the social media pages of
            DLSU USG: <span className="font-medium">DLSU USG on Facebook</span>{" "}
            and <span className="font-medium">@usg_dlsu on Instagram</span>.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
