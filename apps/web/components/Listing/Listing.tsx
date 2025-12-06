// external dependencies
import React, { FC } from 'react'
import { motion } from "framer-motion";

// internal dependencies
import { Component } from './Listing.styles'
import { PostProps } from '@/utils/types/PostProps'
import Card from '@/components/Card/Card'
import { parentVariants, childrenVariants } from '@/styles/animations'

// types
interface ListingProps {
  posts: PostProps[]
}

const Listing: FC<ListingProps> = ({ posts }) => {  
  return (
    <Component
      variants={parentVariants}
      initial="hidden"
      animate="visible"
    >
      {posts ? 
        posts.map((post, index) =>
          <motion.div key={index} variants={childrenVariants}>
            <Card
              info={post}
            />
          </motion.div>
        )
      : null}
    </Component>
	);
};

export default Listing;
