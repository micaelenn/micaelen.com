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
      <ul>
        {menu.map((item, index) =>
          <li key={index} className={getMainPath(pathname) === item.url ? 'current' : ''}>
            <Link className="icon" href={item.url}>
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            </Link>
          </li>
        )}
      </ul>
    </Component>
	);
};

export default Menu;
