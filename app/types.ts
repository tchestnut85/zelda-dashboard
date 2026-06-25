export interface Page {
  id: string;
  href: string;
  title: string;
  description: string;
}

export interface Game {
  id: string;
  name: string;
  description: string;
  developer: string;
  publisher: string;
  released_date: string;
}
