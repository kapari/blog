import * as React from 'react';
import styled from 'styled-components';
import bp from './../../utils/sizes';
import Container from './../Layout/Container';

const Heading = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  @media (min-width: ${bp.xs}) {
    font-size: 1.875rem;
  }
  @media (min-width: ${bp.md}) {
    font-size: 2.4rem;
  }
`;

type Props = {
  id: string;
  title: string;
  list: string[];
  children?: React.ReactNode;
};

const LandingSection: React.FC<Props> = (props: Props) => {
  return (
    <section>
      <Container>
        <div
          role="presentation"
        >
          <div>{props.children}</div>
        </div>
        <div>
          <Heading>{props.title}</Heading>
          <ul>
            {props.list.map((listitem, key) => (
              <li key={key}>
                {listitem}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default LandingSection;
