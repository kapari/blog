import * as React from 'react';
import styled from 'styled-components';
import bp from './../../utils/sizes';
import theme from './../../utils/colors';
import Check from '@material-ui/icons/Check';

const Element = styled.section<{ theme: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
  ${props => props.theme &&
    `color: ${theme[props.theme].fg};`
  }
`;

const Content = styled.div`
  flex: 1 1 auto;
`;

const Heading = styled.h2<{ theme: string }>`
  margin: 1rem auto;
  max-width: min-content;
  font-size: 1.5rem;
  ${props => props.theme &&
    `color: ${theme[props.theme].fgAlt};`
  }
  @media (min-width: ${bp.xs}) {
    font-size: 1.875rem;
  }
  @media (min-width: ${bp.md}) {
    font-size: 2.4rem;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Item = styled.li`
  line-height: 1.4;
  svg {
    margin-right: 0.25rem;
    vertical-align: text-bottom;
  }
`;

const ImageWrapper = styled.div<{
  right: boolean,
  tint: string,
  border: string,
  width: number
}>`
  position: relative;
  ${props => props.right &&
    `order: 1;`
  }
  ${props => props.right ?
    `border-top-left-radius: ${props.width * 2}px;
    border-bottom-left-radius: ${props.width * 2}px;` :
    `border-top-right-radius: ${props.width * 2}px;
    border-bottom-right-radius: ${props.width * 2}px;`
  }
  width: ${props => props.width}px;
  height: ${props => props.width * 2}px;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.tint};
    opacity: 0.3;
  }
  img {
    border: 3px solid ${props => props.border};
    ${props => props.right ?
    `border-top-left-radius: ${props.width * 2}px;
      border-bottom-left-radius: ${props.width * 2}px;
      border-right-width: 0px;` :
    `border-top-right-radius: ${props.width * 2}px;
      border-bottom-right-radius: ${props.width * 2}px;
      border-left-width: 0px;`
  }
    object-position: 33% center;
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
  imgRight?: boolean
};

const LandingSection: React.FC<Props> = (props: Props) => {
  return (
    <Element theme={props.theme}>
      <ImageWrapper
        right={props.imgRight || false}
        tint={theme[props.theme].bgAltStrong}
        border={theme[props.theme].fgAlt}
        width={150}
        role="presentation"
      >
        {props.children}
      </ImageWrapper>
      <Content>
        <Heading theme={props.theme}>{props.title}</Heading>
        <List>
          {props.list.map((listitem, key) => (
            <Item key={key}>
              <Check />
              {listitem}
            </Item>
          ))}
        </List>
      </Content>
    </Element>
  );
};

export default LandingSection;
