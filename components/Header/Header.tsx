// external dependencies
import React, { FC } from 'react';

// internal dependencies
import { Component, Title } from './Header.styles'
import { StatusProps } from '@/utils/types/StatusProps';
import Updates from '@/components/Updates/Updates'
import Social from '@/components/Social/Social'
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';

// types
interface HeaderProps {
  updates: StatusProps;
  title: string;
}

const Header: FC<HeaderProps> = ({ updates, title }) => {  
  return (
    <Component>
      <Updates status={updates} />
      <Title>{title}</Title>
    </Component>
	);
};

export default Header;
