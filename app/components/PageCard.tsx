import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ButtonLink from './ButtonLink';
import { Page } from '../types';

export default function PageCard({ pageDetails }: { pageDetails: Page }) {
  const { title, href, description } = pageDetails;

  return (
    <li>
      <Card className="w-48 h-55 flex flex-col justify-between text-center bg-twilight-green">
        {/* TODO - add images */}
        <CardHeader>
          <CardTitle className="text-lg md:text-xl font-bold">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-base md:text-lg">
          <p>{description}</p>
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
  );
}
