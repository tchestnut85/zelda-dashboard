import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import NavItem from './NavItem';

export default function NavMenu() {
  return (
    <NavigationMenu className="flex items-center rounded-xs">
      <NavigationMenuList className="flex flex-wrap gap-3">
        <NavItem href="/" label="Home" />
        <NavItem href="/heroes" label="Heroes" />
        <NavItem href="/villains" label="Villains" />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
