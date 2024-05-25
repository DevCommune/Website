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
          <AccordionTrigger>What activities does Dev Commune offer?</AccordionTrigger>
          <AccordionContent className="text-left">
          Dev Commune offers a variety of activities including hands-on workshops, networking meetups, hackathons, and collaborative projects aimed at enhancing technical skills and fostering industry connections.

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
          Who can join Dev Commune? Is it only for developers?

          </AccordionTrigger>
          <AccordionContent className="text-left">
          Dev Commune welcomes anyone with an interest in technology, from beginners to seasoned professionals. Our community is open to developers, tech enthusiasts, students, and anyone looking to expand their knowledge and skills in tech.

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
          How can I benefit from joining Dev Commune?

          </AccordionTrigger>
          <AccordionContent className="text-left">
          By joining Dev Commune, you can benefit from networking opportunities, access to educational resources, mentorship, and participating in collaborative projects that can enhance your skills and career prospects in the tech industry.

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
          Are there membership fees to join Dev Commune?

          </AccordionTrigger>
          <AccordionContent className="text-left">
          No, Dev Commune is committed to being an inclusive community and does not charge any membership fees. Our resources and events are accessible to all who are interested in participating.

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
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
