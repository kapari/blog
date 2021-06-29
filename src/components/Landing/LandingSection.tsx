import * as React from 'react';
import styled from 'styled-components';
import { breakpoints as bp, landing } from './../../utils/sizes';
import theme from './../../utils/colors';
import Check from '@material-ui/icons/Check';

const Element = styled.section<{ theme: string, first: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${props => props.first &&
    `padding-top: 2rem;`
  }
  ${props => props.theme &&
    `background-color: ${theme[props.theme].bg};
    color: ${theme[props.theme].fg};`
  }
  @media (min-width: ${bp.xs}) {
    flex-direction: row;
    padding-top: 2rem;
    padding-bottom: 2rem;
  } 
  @media (min-width: ${landing.split}) {    
    min-height: 70vh;
    background-color: transparent;
  }
`;

const Content = styled.div<{ first: boolean }>`
  flex: 1 1 auto;
  padding-bottom: 1.5rem;
  ${props => !props.first &&
    `padding-top: 1rem;
    padding-bottom: 2rem;`
  }
`;

const Heading = styled.h2<{ theme: string }>`
  margin: 1rem auto;
  font-size: 1.5rem;
  letter-spacing: 0.03em;
  ${props => props.theme &&
    `color: ${theme[props.theme].fgAlt};`
  }
  @media (min-width: ${bp.xs}) {
    font-size: 1.875rem;
  }
  @media (min-width: ${landing.split}) {
    max-width: min-content;
  }
  @media (min-width: ${bp.lg}) {
    font-size: 2.4rem;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  letter-spacing: 0.1em;
`;

const Item = styled.li`
  line-height: 1.4;
`;

const Icon = styled(Check) <{ theme: string }>`
  max-width: 1.5em;
  margin-right: 0.25rem;
  vertical-align: text-bottom;
  fill: ${props => theme[props.theme].fgAlt};
`;

const ImageWrapper = styled.div<{
  first: boolean,
  tint: string,
  border: string,
  sizeH: number,
  sizeV: number
}>`
  position: relative;
  overflow: hidden;
  ${props => props.first &&
    `order: 1;`
  }
  
  @media (max-width: 575px) {
    width: ${props => props.sizeV * 2}px;
    height: ${props => props.sizeV}px;
  }
  @media (min-width: ${bp.xs}) {
    width: ${props => props.sizeH}px;
    height: ${props => props.sizeH * 2}px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.tint};
    opacity: 0.4;
  }

  img {
    border: 3px solid ${props => props.border};
    object-position: 33% center;
  }

  &,
  &::after,
  img {
    // Border Radius
    @media (max-width: 575px) {
      width: ${props => props.sizeV * 2}px;
      height: ${props => props.sizeV}px;
      ${props => props.first ?
    // top half
    `border-top-left-radius: ${props.sizeV * 2}px;
        border-top-right-radius: ${props.sizeV * 2}px;
        border-bottom-width: 0;` :
    // bottom half
    `border-bottom-left-radius: ${props.sizeV * 2}px;
        border-bottom-right-radius: ${props.sizeV * 2}px;
        border-top-width: 0;`
  }
    }
    @media (min-width: ${bp.xs}) {
      width: ${props => props.sizeH}px;
      height: ${props => props.sizeH * 2}px;
      ${props => props.first ?
    // left half
    `border-top-left-radius: ${props.sizeH * 2}px;
        border-bottom-left-radius: ${props.sizeH * 2}px;
        border-right-width: 0;` :
    // right half
    `border-top-right-radius: ${props.sizeH * 2}px;
        border-bottom-right-radius: ${props.sizeH * 2}px;
        border-left-width: 0;`
  }
    }
  }

  * {
    // fix object-fit
    width: 100%;
    height: 100%;
  }
`;

type Props = {
  id: string;
  title: string;
  list: string[];
  children?: React.ReactNode;
  theme: string
  first?: boolean
};

const LandingSection: React.FC<Props> = (props: Props) => {
  return (
    <Element theme={props.theme} first={props.first || false}>
      <ImageWrapper
        first={props.first || false}
        tint={theme[props.theme].bgAltStrong}
        border={theme[props.theme].primary}
        sizeV={100}
        sizeH={150}
        role="presentation"
      >
        {props.children}
      </ImageWrapper>
      <Content first={props.first || false}>
        <Heading theme={props.theme}>{props.title}</Heading>
        <List>
          {props.list.map((listitem, key) => (
            <Item key={key}>
              <Icon theme={props.theme} />
              {listitem}
            </Item>
          ))}
        </List>
      </Content>
    </Element>
  );
};

export default LandingSection;
