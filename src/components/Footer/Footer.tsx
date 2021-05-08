import * as React from 'react';

type Props = {
  children?: React.ReactNode
};

const Footer: React.FC<Props & React.HTMLAttributes<HTMLElement>> = (props: Props) => {
  let year = new Date().getFullYear().toString()
  if (year !== '2021') {
    year = `2021-${year}`
  }

  return (
    <footer>
      <p>&copy; {year} Ariel Kaplan</p>
    </footer>
  );
};

export default Footer;
