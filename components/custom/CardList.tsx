import { ICard } from "@/types/Card";
import { Card } from "./Card";

interface CardListProps {
  cards: ICard[];
}

export const CardList = ({ cards }: CardListProps) => {
  if (!cards || cards.length === 0) return null;

  // Split cards into two arrays
  const fullWidthCards = cards.filter((card) => card.FullWidth);
  const gridCards = cards.filter((card) => !card.FullWidth);

  return (
    <div className="space-y-8">
      {/* Render FullWidth cards first (Stacked) */}
      {fullWidthCards.length > 0 && (
        <div className="flex flex-col gap-6">
          {fullWidthCards.map((card, idx) => (
            <Card key={`full-${idx}`} {...card} />
          ))}
        </div>
      )}

      {/* Render Regular cards in a Grid */}
      {gridCards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridCards.map((card, idx) => (
            <Card key={`grid-${idx}`} {...card} />
          ))}
        </div>
      )}
    </div>
  );
};