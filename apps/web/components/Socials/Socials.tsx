// external dependencies
import React, { FC } from 'react'
import { motion } from "framer-motion";

// internal dependencies
import { Component } from './Socials.styles'
import { SocialMediasProps } from '@/utils/types/SocialMediasProps';
import { parentVariants, childrenVariants } from '@/styles/animations'

// types
interface SocialsProps {
  socials: SocialMediasProps[];
}

const Socials: FC<SocialsProps> = ({ socials }) => {
  return (
    <Component
      variants={parentVariants}
      initial="hidden"
      animate="visible">
        {socials.map((social, index) =>
          <motion.a 
            key={index} 
            className="link" 
            href={social.url} 
            target='_blank' 
            variants={childrenVariants}
          >
            <div dangerouslySetInnerHTML={{ __html: social.icon }} />
            <p>{social.name}</p>
          </motion.a>
        )}
    </Component>
	);
};

export default Socials;
