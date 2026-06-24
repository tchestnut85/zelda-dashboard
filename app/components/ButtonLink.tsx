import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function ButtonLink({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'hover:cursor-pointer text-black text-xl bg-warriors-yellow hover:bg-twilight-yellow! rounded-sm',
        className,
      )}
    >
      <p>{text}</p>
    </Link>
  );
}
