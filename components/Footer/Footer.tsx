"use client"

// external dependencies
import React, { FC } from 'react'

// internal dependencies
import { Component } from './Footer.styles'
import { SocialProps } from '@/components/Social/SocialProps'
import Social from '@/components/Social/Social'

// types
interface FooterProps {
  content: SocialProps
}

const Footer: FC<FooterProps> = ({ content }) => {    
  return (
    <Component className="container">
      <Social social={content.social} />
    </Component>
	)
}

export default Footer;
