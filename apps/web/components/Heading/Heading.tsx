// external dependencies
import React, { FC } from "react";
import Image from "next/image";

// internal dependencies
import { Component } from "./Heading.styles";

// types
interface HeadingProps {
  title: string;
  description: string;
  createdAt: string;
  image: string;
}

const Heading: FC<HeadingProps> = ({ title, description, createdAt, image }) => {
  return (
    <Component>
      <Image src={image} alt={title} height={92} width={120} />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <time>{createdAt}</time>
      </div>
    </Component>
  );
};

export default Heading;
