import * as React from 'react';
import styled from 'styled-components';
import { landing } from './../../utils/sizes';
import theme from './../../utils/colors';
import { motion, useReducedMotion } from "framer-motion"

const Element = styled(motion.div)`
  width: 100%;
  @media (min-width: ${landing.split}) {
    display: flex;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(
        90deg, 
        ${theme.light.bg} 50%, 
        ${theme.dark.bg} 50%
      );
    }
  }
`;

const Column = styled(motion.div)`
  @media (min-width: ${landing.split}) {
    flex: 1 1 50%;
  }
`;

type Props = {
  children?: React.ReactNode
  left: React.ReactChild
  right: React.ReactChild
};

const LandingSection: React.FC<Props> = (props: Props) => {
  const shouldReduceMotion = useReducedMotion()

  const left = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -50 },
    visible: { opacity: 1, y: 0 }
  }

  const right = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <Element initial="hidden" animate="visible">
      <Column variants={left} transition={{ duration: 1.5 }}>
        {props.left}
      </Column>
      <Column variants={right} transition={{ duration: 1.5 }}>
        {props.right}
      </Column>
    </Element>
  );
};

export default LandingSection;
