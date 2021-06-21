import * as React from 'react';
// import {
//   el,
//   content,
//   content_image,
//   image,
//   heading,
//   list,
//   item
// } from './LandingSection.module.scss';

type Props = {
  id: string;
  title: string;
  list: string[];
  children?: React.ReactNode;
};

const LandingSection: React.FC<Props> = (props: Props) => {
  return (
    <section>
      <div
        role="presentation"
      >
        <div>{props.children}</div>
      </div>
      <div>
        <h2>{props.title}</h2>
        <ul>
          {props.list.map((listitem, key) => (
            <li key={key}>
              {listitem}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LandingSection;
