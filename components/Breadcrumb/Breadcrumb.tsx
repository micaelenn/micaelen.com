// external dependencies
import React, { FC } from 'react'
import Link from 'next/link'

// internal dependencies
import { Component } from './Breadcrumb.styles'

// types
interface BreadcrumbProps {
  homepageTitle: string;
  currentTitle: string;
  currentPath: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ homepageTitle, currentTitle, currentPath }) => {
  return (
    <Component>
      <Link href={`/`}>
        <span>{homepageTitle}</span>
      </Link>

      {currentPath && currentTitle ?
        <>
          <span>{`/`}</span>
          <Link href={currentPath}>
            <h1>{currentTitle}</h1>
          </Link>
        </>
        : null
      }

    </Component>
  );
};

export default Breadcrumb;
