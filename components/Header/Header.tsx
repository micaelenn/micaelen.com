"use client"

// external dependencies
import React, { FC } from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";

// internal dependencies
import { Component, Center, ToggleWrapper } from './Header.styles'
import Updates from '@/components/Updates/Updates'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import { getMainPath, formatPath } from '@/utils/helpers/string'

// types
interface HeaderProps {
  content: {
    title: string;
    updates: string[];
  }
}

const Header: FC<HeaderProps> = ({ content }) => {
  const pathname = usePathname();
  const pageName = formatPath(getMainPath(pathname))

  return (
    <Component>
      <Center>
        {pathname === '/' ?
          <Link href={'/'}>
            <h1>{content.title}</h1>
          </Link> :
          <Breadcrumb
            homepageTitle={content.title}
            currentTitle={pageName}
            currentPath={pathname}
          />
        }
        <Updates status={content.updates} />
      </Center>
      <ToggleWrapper>
        <ThemeToggle />
      </ToggleWrapper>
    </Component>
  );
};

export default Header;
