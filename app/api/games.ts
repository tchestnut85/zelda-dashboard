import { Game } from '@/app/types';
import { ClientError, request as gqlRequest } from 'graphql-request';
import { ZELDA_GRAPHQL_API } from '../constants';
import { GAMES_QUERY } from './queries';

type GamesResponse = { games: Game[] };

async function getGames(): Promise<Game[]> {
  try {
    const data = await gqlRequest<GamesResponse>(
      ZELDA_GRAPHQL_API,
      GAMES_QUERY,
    );

    if (!data?.games) {
      throw new Error(
        `No game data returned from the Zelda API at ${ZELDA_GRAPHQL_API}`,
      );
    }

    return data.games;
  } catch (error) {
    if (error instanceof ClientError) {
      console.error('Zelda API GraphQL error:', error.response.errors);
      throw new Error(
        error.response.errors?.[0]?.message ??
          'Zelda API GraphQL requets failed.',
      );
    }

    console.error('There was an error:', error);
    throw error;
  }
}

export { getGames };
