const ZELDA_GRAPHQL_API = 'https://zelda.fanapis.com/api/graphql' as const;

export default async function Home() {
  async function getGames() {
    const query = `
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

    try {
      // TODO - try to use react-query but will probably need to make it a client component and there might be CORS issue with the API
      const res = await fetch(ZELDA_GRAPHQL_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      console.log('res:', res);
      const { data, errors } = await res.json();
      // console.log('data:', data);

      if (res.status !== 200 || errors || !data) {
        throw new Error(`There was an error: ${errors[0].message}`);
      }

      return data.games;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
    }
  }

  const games = await getGames();
  console.log('games:', games);

  return (
    <main>
      <h1>Legend of Zelda Dashboard homepage</h1>
      {games.length && (
        <ul>
          {games.map(game => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
