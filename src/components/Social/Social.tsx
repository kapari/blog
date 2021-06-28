import * as React from 'react';
import styled from 'styled-components';
import Hidden from '../Layout/VisuallyHidden';
import theme from './../../utils/colors';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: inline-flex;
  align-items: center;
`;

const Item = styled.li`
  margin-bottom: 0;
`;

const Link = styled.a`
  transition: color 0.25s ease-in-out;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: ${theme.dark.fg};
  &:hover,
  &:active,
  &:focus {
    color: ${theme.dark.primary};
    box-shadow: none;
  }

  svg {
    vertical-align: middle;
  }
`;

const Social: React.FC = () => {
  return (
    <List>
      <Item>
        <Link href="https://www.linkedin.com/in/arielhkaplan/">
          <LinkedIn />
          <Hidden>LinkedIn</Hidden>
        </Link>
      </Item>
      <Item>
        <Link href="https://twitter.com/arielhkaplan">
          <Twitter />
          <Hidden>Twitter</Hidden>
        </Link>
      </Item>
      <Item>
        <Link href="https://github.com/kapari">
          <GitHub />
          <Hidden>GitHub</Hidden>
        </Link>
      </Item>
    </List>
  );
};

export default Social;
