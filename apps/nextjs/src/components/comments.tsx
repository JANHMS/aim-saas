import { cn } from "@saasfly/ui";
import Marquee from "@saasfly/ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Alex",
    username: "@alex",
    body: "This tool has revolutionized the way our team works.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Shamoki",
    username: "@shamoki",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "王伟",
    username: "@wangwei",
    body: "这款 SaaS 服务简直是办公利器！我的工作效率提高了很多。",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack"
  },
  {
    name: "Hans",
    username: "@hans",
    body: "Diese Anwendung hat unsere Arbeitsweise revolutioniert. Es ist erstaunlich.",
    img: "https://avatar.vercel.sh/hans"
  },
  {
    name: "Marie",
    username: "@marie",
    body: "Cet outil a révolutionné notre façon de travailler. C'est incroyable.",
    img: "https://avatar.vercel.sh/marie"
  },
  {
    name: "Sophie",
    username: "@sophie",
    body: "Ce service est vraiment incroyable. Cela a rendu notre travail beaucoup plus facile.",
    img: "https://avatar.vercel.sh/sophie"
  },
  {
    name: "Max",
    username: "@max",
    body: "Dieses Tool ist so leistungsfähig! Es hat unsere Produktivität drastisch verbessert.",
    img: "https://avatar.vercel.sh/max"
  },
  {
    name: "Pierre",
    username: "@pierre",
    body: "Je n'ai jamais vu quelque chose comme ça auparavant. C'est impressionnant.",
    img: "https://avatar.vercel.sh/pierre"
  },
  {
    name: "Anna",
    username: "@anna",
    body: "Dieses Tool hat das Potenzial, die Branche zu verändern. Ich bin begeistert.",
    img: "https://avatar.vercel.sh/anna"
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Comments = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export { Comments };
