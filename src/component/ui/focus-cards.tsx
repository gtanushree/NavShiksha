"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "../../../lib/utils";

// Card Component
export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <a
      href={card.link} // Make the card clickable
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // For security reasons
      className="relative w-full h-full"
    >
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-2xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden mt-16 h-60 md:h-96 w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex justify-center items-center transition-opacity duration-300", // Center content
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-center">
            <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
              {card.title}
            </div>
          </div>
        </div>
      </div>
    </a>
  )
);

Card.displayName = "Card";

// FocusCards Component
type Card = {
  title: string;
  src: string;
  link: string; // Added link field
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 py-8 ">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
