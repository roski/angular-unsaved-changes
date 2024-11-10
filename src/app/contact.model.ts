export enum Season {
  Winter = 'winter',
  Spring = 'spring',
  Summer = 'summer',
  Autumn = 'autumn',
}

export interface Contact {
  name: string;
  email: string;
  phone: string;
  favoriteSeason: Season;
}
