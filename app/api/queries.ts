import { gql } from 'graphql-request';

export const GAMES_QUERY = gql`
  query Games {
    games {
      id
      name
      description
      released_date
      developer
      publisher
    }
  }
`;
