// external dependencies
import React, { FC } from 'react'
import Link from 'next/link'
import { WaveSine } from "@phosphor-icons/react";

// internal dependencies
import { Component } from './Bradcrumb.styles'

// types
interface BradcrumbProps {
  previous: string;
  title: string;
}

const Bradcrumb: FC<BradcrumbProps> = ({ previous, title }) => {
  return (
    <Component>
      <Link href={`/${previous}/`}>
        {`${previous}`}
      </Link>

      <h1>{title}</h1>
    </Component>
	);
};

export default Bradcrumb;
