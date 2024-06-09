"use client";

import { TextGenerateEffect } from "@saasfly/ui/typewriter-effect";

export function TypewriterEffectSmooths() {
  const words = [
    {
      text: "1$",
    },
    {
      text: "spend",
    },
    {
      text: "on",
    },
    {
      text: "Aim.",
      className: "text-blue-500",
    },
    {
      text: "leads",
    },
    {
      text: "to",
    },
    {
      text: "5$",
    },
    {
      text: "revenue",
    },
    {
      text: "for",
    },
    {
      text: "you",
    },
  ];
  return (
    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
      <TextGenerateEffect words={words} />
    </p>
  );
}
