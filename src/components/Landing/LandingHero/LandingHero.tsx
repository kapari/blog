import * as React from 'react';
import Social from '../../Social/Social';
import { el, content, title } from './LandingHero.module.scss';

type Props = {
  children?: React.ReactNode
};

const LandingHero: React.FC<Props> = (props: Props) => {
  return (
    <section className={el}>
      <div className={content}>
        <h1 className={title}>Hello!</h1>
        <p>I dance and create websites in the Portland, Oregon area.</p>
        <Social />
      </div>
    </section>
  );
};

export default LandingHero;