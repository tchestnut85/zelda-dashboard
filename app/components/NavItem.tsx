import { cn } from '@/lib/utils';
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import ButtonLink from './ButtonLink';

export default function NavItem({
  href,
  label,
  isCurrentRoute,
  className,
}: {
  href: string;
  label: string;
  isCurrentRoute: boolean;
  className?: string;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        asChild
        className={cn(
          'text-sm sm:text-lg twilight-yellow rounded-sm focus:bg-twilight-yellow p-1 text-center',
          isCurrentRoute ? 'bg-sheikahslate-blue!' : 'bg-warriors-yellow',
          className,
        )}
      >
        <ButtonLink href={href} text={label} className="text-sm md:text-lg" />
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
