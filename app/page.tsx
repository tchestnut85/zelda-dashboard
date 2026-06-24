import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ButtonLink from './components/ButtonLink';
import { PAGES } from '@/app/constants';

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10">
      <h2 className="text-center text-xl md:text-3xl">
        Explore the realm of Hyrule!
      </h2>
      <ul className="flex flex-col flex-wrap sm:flex-row justify-center items-center gap-5">
        {PAGES.map(({ id, href, title, description }) => (
          <li key={id}>
            <Card className="w-48 h-55 flex flex-col justify-between text-center bg-twilight-green">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl font-bold">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-base md:text-lg">
                {description}
              </CardContent>
              <CardFooter className="self-center">
                <ButtonLink
                  href={href}
                  text={`Go to ${title}`}
                  className="text-base p-2"
                />
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}
