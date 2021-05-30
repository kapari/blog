import * as React from 'react';
import {
  el,
  content,
  content_image,
  image,
  heading,
  list,
  item,
} from './LandingSection.module.scss';

type Props = {
  id: string
  title: string
  list: string[]
  children?: React.ReactNode
};

const LandingSection: React.FC<Props> = (props: Props) => {
  return (
    <section className={el}>
      <div className={`${content} ${content_image} ${props.id}`}>
        <div className={image}>
          {props.children}
        </div>
      </div>
      <div className={content}>
        <h2 className={heading}>{props.title}</h2>
        <ul className={list}>
          {props.list.map(listitem => (
            <li key={listitem} className={item}>{listitem}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LandingSection;
