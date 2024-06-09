import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@saasfly/ui/accordion";

export function Questions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>New Lead Generated</AccordionTrigger>
        <AccordionContent>
          Our AI-based lead generation tool helps you effortlessly capture new leads, 
          ensuring you never miss a potential opportunity. 
          This feature leverages advanced algorithms to identify and prioritize high-quality leads.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Automatic Follow-Up Emails</AccordionTrigger>
        <AccordionContent>
          Say goodbye to the tedious task of writing follow-up emails manually. 
          Our tool automates this process, sending timely and personalized follow-up emails 
          to keep your leads engaged and move them through the sales funnel efficiently.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Your Call Is Transcribed & Summarized</AccordionTrigger>
        <AccordionContent>
          Keep track of all your communications with our transcription feature. 
          It transcribes emails and calls, allowing you to focus on the conversation while 
          ensuring that you have a complete record for future reference.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
