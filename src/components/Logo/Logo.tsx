import * as React from 'react';
import styled from 'styled-components';
import theme from './../../utils/colors';

const Svg = styled.svg`
  max-width: 100%;
  height: auto;
`;

const Content = styled.g`
  transform: rotate(107deg) translate(43%, -63%);
`;

const Path = styled.path`
  fill: ${theme.light.fgAlt};
`;

const Layout: React.FC = () => {
  return (
    <Svg
      viewBox="0 0 400 550"
      height="400"
      width="550"
      xmlSpace="preserve"
      version="1.1"
      role="img"
      aria-labelledby="logoTitle"
    >
      <title id="logoTitle">Ariel Kaplan</title>
      <Content transform="translate(224.9863,196.5947)">
        <Path
          d="M 0,0 C -7.615,7.439 -5.844,8.91 -5.844,8.91 L 3.551,31.674 26.605,31.15 c 0,0 2.139,0.52 7.311,-10.329 18.666,-42.748 18.666,-58.082 18.666,-58.082 0,0 -24.332,9.667 -52.582,37.261 m 225.137,82.993 c 0,0 -60.745,9.74 -151.658,13.207 -31.743,86.282 -61.928,142.095 -61.928,142.095 0,0 -29.882,-58.135 -60.969,-142.038 -92.571,-3.531 -154.638,-13.985 -154.638,-13.985 0,0 47.428,-44.563 117.554,-99.921 -24.474,-86.21 -36.048,-152.654 -36.048,-152.654 l 77.032,54.915 c 0,0 7.221,27.872 14.491,54.253 92.886,-69.039 174.605,-110.745 174.605,-110.745 0,0 -13.139,90.407 -47.023,199.914 28.547,-1.788 49.718,-3.628 49.718,-3.628 z"
        />
      </Content>
    </Svg>
  );
};

export default Layout;
