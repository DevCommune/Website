import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <div className="flex flex-col w-[90%] lg:w-[80%] z-10 px-5 lg:px-10 overflow-hidden rounded-lg border bg-background md:shadow-xl py-10 lg:py-20">
      <h1 className="scroll-m-20 pb-[3rem] text-center text-3xl font-semibold tracking-tight lg:text-4xl">
        Frequently Asked Questions (FAQs)
      </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Lorem ipsum dolor sit amet.</AccordionTrigger>
          <AccordionContent className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            tempora?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
            expedita.
          </AccordionTrigger>
          <AccordionContent className="text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            cum delectus dolore dolorem atque tenetur quo temporibus soluta
            facere quidem!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
