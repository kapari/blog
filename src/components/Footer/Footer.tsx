import * as React from 'react';
import {
  el,
  hidden,
  content,
  list,
  link,
  copyright
} from './Footer.module.scss';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';

type Props = {
  children?: React.ReactNode
};

const Footer: React.FC<Props & React.HTMLAttributes<HTMLElement>> = (props: Props) => {
  let year = new Date().getFullYear().toString()
  if (year !== '2021') {
    year = `2021-${year}`
  }

  return (
    <footer className={el}>
      <div className={content}>
        <h2 className={hidden}>Contact</h2>
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
      </div>
      <p className={copyright}>&copy; Copyright {year} Ariel Kaplan</p>
    </footer>
  );
};

export default Footer;
