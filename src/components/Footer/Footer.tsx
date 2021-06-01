import * as React from 'react';
import {
  el,
  hidden,
  content,
  copyright
} from './Footer.module.scss';
import Social from '../Social/Social';

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
        <Social />
      </div>
      <p className={copyright}>&copy; Copyright {year} Ariel Kaplan</p>
    </footer>
  );
};

export default Footer;
