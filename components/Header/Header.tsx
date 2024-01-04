"use client"

// external dependencies
import React, { FC } from 'react';

// internal dependencies
import { Component } from './Header.styles'
import { StatusProps } from '@/utils/types/StatusProps';
import { SocialMediasProps } from '@/utils/types/SocialMediasProps';
import Updates from '@/components/Updates/Updates'
import Menu from '@/components/Menu/Menu'
import { MenuItemProps } from '@/utils/types/MenuItemProps';

// types
interface HeaderProps {
  content: {
    updates: StatusProps;
    menu:  MenuItemProps[]
  }
}

const Header: FC<HeaderProps> = ({ content }) => {  
  return (
    <Component className="container">
      <Updates status={content.updates} />
      <Menu menu={content.menu} />
    </Component>
	);
};

export default Header;
