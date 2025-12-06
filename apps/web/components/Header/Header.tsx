"use client"

// external dependencies
import React, { FC } from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";

// internal dependencies
import { Component } from './Header.styles'
import Updates from '@/components/Updates/Updates'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import { StatusProps } from '@/utils/types/StatusProps'
import { getMainPath, formatPath } from '@/utils/helpers/string'

// types
interface HeaderProps {
  content: {
    title: string;
    updates: StatusProps;
  }
}

const Header: FC<HeaderProps> = ({ content }) => {    
  const pathname = usePathname();
  const pageName = formatPath(getMainPath(pathname))

  return (
    <Component>
      {pathname === '/' ? 
        <Link href={'/'}>
          <h1>{content.title}</h1>
        </Link> : 
        <Breadcrumb 
          title={content.title} 
          currentTitle={pageName} 
          currentPath={pathname}
        />
      }
      <Updates status={content.updates} />
    </Component>
	);
};

export default Header;
