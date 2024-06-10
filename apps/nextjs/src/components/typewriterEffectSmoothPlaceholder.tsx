"use client";

import { TextGenerateEffect } from "@saasfly/ui/typewriter-effect";

export default function ComingSoonPage() {
  const words = [
    {
      text: "AIM:",
    },
    {
      text: "Coming",
    },
    {
      text: "Soon",
      className: "text-blue-500",
    },
    {
      text: ",",
    },
    {
      text: "Stay",
    },
    {
      text: "Tuned",
      className: "text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        <TextGenerateEffect words={words} />
      </p>
    </div>
  );
}
