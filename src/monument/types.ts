export type Monument = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageDescription: string;
  city: string;
  country: string;
};

export type MonumentData = Omit<Monument, "id" | "imageDescription">;
