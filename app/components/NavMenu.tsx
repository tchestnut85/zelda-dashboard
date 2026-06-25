'use client';

import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import NavItem from './NavItem';
import { PAGES } from '../constants';

export default function NavMenu() {
  const path = usePathname();
  const isHomepage = path === '/';

  return (
    <NavigationMenu className="flex items-center rounded-xs">
      <NavigationMenuList className="grid grid-cols-3 gap-3">
        {!isHomepage &&
          PAGES.map(({ id, title, href }) => {
            const isCurrentRoute = path === href;

            return (
              <NavItem
                key={id}
                href={href}
                label={title}
                isCurrentRoute={isCurrentRoute}
                className="self-center"
              />
            );
          })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
