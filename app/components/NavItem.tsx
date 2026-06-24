'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import ButtonLink from './ButtonLink';

export default function NavItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const route = usePathname();
  const isCurrentRoute = route === href;

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        asChild
        className={cn(
          'text-sm sm:text-xl lg:text-2xl rounded-sm focus:bg-twilight-yellow',
          isCurrentRoute ? 'bg-sheikahslate-blue!' : 'bg-warriors-yellow',
        )}
      >
        <ButtonLink
          href={href}
          text={label}
          className="text-sm md:text-xl lg:text-2xl"
        />
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
