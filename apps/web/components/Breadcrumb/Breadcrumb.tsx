// external dependencies
import React, { FC } from 'react'
import Link from 'next/link'

// internal dependencies
import { Component } from './Breadcrumb.styles'

// types
interface BreadcrumbProps {
  title: string;
  currentTitle: string;
  currentPath: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ title, currentTitle, currentPath }) => {
  return (
    <Component>
      <Link href={`/`}>
        <span>{title}</span>
      </Link>
      <span>{`/`}</span>

      <Link href={currentPath}>
        <h1>{currentTitle}</h1>
      </Link>
    </Component>
	);
};

export default Breadcrumb;
