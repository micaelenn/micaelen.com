'use client'

// external dependencies
import { usePathname } from 'next/navigation';
import React, { FC } from 'react'
import Link from 'next/link'

// internal dependencies
import { Component } from './Menu.styles'
import { MenuItemProps } from '@/utils/types/MenuItemProps';
import { getMainPath } from '@/utils/helpers/string'

// types
interface MenuProps {
  menu: MenuItemProps[];
}

const Menu: FC<MenuProps> = ({ menu }) => {
  const pathname = usePathname()

  return (
    <Component>
      <ul className="menu" data-id="menu">
        {menu.map((item, index) =>
          <li
            key={index}
            className={getMainPath(pathname) === item.url ? 'current' : ''}
            data-id={`navigation-${index}`}
          >
            <Link className="icon" href={item.url} aria-label={item.name}>
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
              <span>{item.name}</span>
            </Link>
          </li>
        )}
      </ul>
    </Component>
  );
};

export default Menu;
