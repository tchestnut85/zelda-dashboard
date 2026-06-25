import { Suspense } from 'react';
import { getGames } from '../api/games';
import PageWrapper from '../components/PageWrapper';
import Loading from '../loading';
import GameCard from '../components/GameCard';

export default async function GamesPage() {
  const games = await getGames();

  return (
    <PageWrapper headingText="Legend of Zelda Games">
      <Suspense fallback={<Loading />}>
        <ul className="flex flex-col flex-wrap sm:flex-row justify-center items-center gap-5">
          {games.length &&
            games.map(game => <GameCard key={game.id} game={game} />)}
        </ul>
      </Suspense>
    </PageWrapper>
  );
}
