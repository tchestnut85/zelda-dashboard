import { Page } from './types';

export const ZELDA_GRAPHQL_API =
  'https://zelda.fanapis.com/api/graphql' as const;

export const PAGES: Page[] = [
  {
    id: 'home',
    href: '/',
    title: 'Home',
    description: 'Homepage',
  },
  {
    id: 'games',
    href: '/games',
    title: 'Games',
    description: 'Discover lore of Zelda games',
  },
  {
    id: 'heroes',
    href: '/heroes',
    title: 'Heroes',
    description: 'Meet heroes or other characters',
  },
  {
    id: 'villains',
    href: '/villains',
    title: 'Villains',
    description: 'Battle villains and other enemies',
  },
  {
    id: 'locations',
    href: '/locations',
    title: 'Locations',
    description: 'Explore Hyrule and other locations',
  },
  {
    id: 'monsters',
    href: '/monsters',
    title: 'Monsters',
    description: 'Vanquish monsters of Hyrule',
  },
] as const;
