import { Hero } from "./hero";

export interface Team {
  id: number;
  name: string;
  members: Hero[];
};
