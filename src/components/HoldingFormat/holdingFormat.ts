export interface HoldingWeek {
  holdingWeek: string;
  dayOfWeek: string;
  text: string;
}

export interface HoldingFormat {
  holdingFormat: "対面" | "オンライン";
  image: string;
  place: string;
  time: string;
}
