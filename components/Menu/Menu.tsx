// external dependencies
import React, { FC } from 'react'
import Link from 'next/link'

// internal dependencies
import { Component } from './Menu.styles'
import { MenuItemProps } from '@/utils/types/MenuItemProps';

// types
interface MenuProps {
  menu: MenuItemProps[];
}

const Menu: FC<MenuProps> = ({ menu }) => {
  return (
    <Component>
    {menu.map((item, index) =>
      <li key={index}>
        <Link href={item.url}>
          {item.name}
        </Link>
      </li>
    )}
    </Component>
	);
};

export default Menu;
