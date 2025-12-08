// external dependencies
import React, { FC } from "react";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";

// internal dependencies
import { Component, Content } from "./Introduction.styles";
import PillList from "@/components/PillList/PillList";
import { IntroProps } from "@/utils/types/IntroProps";
import { parentVariants, childrenVariants } from "@/styles/animations";

// types
interface IntroductionProps {
  content: IntroProps;
}

const Introduction: FC<IntroductionProps> = ({ content }) => {
  return (
    <Component>
      <Content variants={parentVariants} initial="hidden" animate="visible">
        <motion.div variants={childrenVariants}>
          <PortableText value={content.description} />
        </motion.div>

        <motion.div variants={childrenVariants}>
          {content.stack ? <PillList title={`Skills & Technologies`} items={content.stack} /> : null}
        </motion.div>
      </Content>
    </Component>
  );
};

export default Introduction;
