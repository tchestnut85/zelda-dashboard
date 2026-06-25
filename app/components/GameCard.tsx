import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ButtonLink from './ButtonLink';
import { Game } from '../types';

export default function GameCard({ game }: { game: Game }) {
  const { id, name, released_date } = game;

  return (
    <li key={id}>
      <Card className="w-48 h-55 flex flex-col gap-3 justify-between text-center bg-twilight-green">
        {/* TODO - add images */}
        <CardHeader>
          <CardTitle className="text-lg md:text-xl font-bold line-clamp-3 h-20">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm md:text-base">
          <p>{released_date}</p>
        </CardContent>
        <CardFooter className="self-center">
          <ButtonLink
            href={`/games/${id}`}
            text="Details"
            className="text-base p-2"
          />
        </CardFooter>
      </Card>
    </li>
  );
}
