export interface Species {
  id: number;
  name: string;
  flavorTextEntries: Array<flavorTextEntry>;
}

export interface flavorTextEntry {
  language: string;
  flavorText: string;
}
