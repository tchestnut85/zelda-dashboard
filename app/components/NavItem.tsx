import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

export default function NavItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        className="text-2xl hover:bg-warriors-yellow rounded-md"
        asChild
      >
        <Link href={href}>{label}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
