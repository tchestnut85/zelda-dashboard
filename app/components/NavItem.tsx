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
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <ButtonLink href={href} text={label} />
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
