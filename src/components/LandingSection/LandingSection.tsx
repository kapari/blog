import * as React from 'react';
import {
  el,
  image,
  content,
  heading,
  list,
  item,
} from './LandingSection.module.scss';

type Props = {
  title: string
  list: string[]
  image?: string
};

const LandingSection: React.FC<Props> = (props: Props) => {
  return (
    <section className={el}>
      {props.image && (
        <div className={content}>
          <img src={props.image} className={image} />
        </div>
      )}
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
