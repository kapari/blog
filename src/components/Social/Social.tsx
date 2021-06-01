import * as React from 'react';
import {
  hidden,
  list,
  link
} from './Social.module.scss';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';

const Social: React.FC = () => {
  return (
    <ul className={list}>
      <li>
        <a className={link} href="https://www.linkedin.com/in/arielhkaplan/">
          <LinkedIn />
          <span className={hidden}>LinkedIn</span>
        </a>
      </li>
      <li>
        <a className={link} href="https://twitter.com/arielhkaplan">
          <Twitter />
          <span className={hidden}>Twitter</span>
        </a>
      </li>
      <li>
        <a className={link} href="https://github.com/kapari">
          <GitHub />
          <span className={hidden}>GitHub</span>
        </a>
      </li>
    </ul>
  );
};

export default Social;
