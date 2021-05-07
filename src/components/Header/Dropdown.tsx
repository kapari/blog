import * as React from 'react';
import { Link } from 'gatsby'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import {
  visible,
  hidden,
  dropdown__link,
  dropdown__toggle
} from './Dropdown.module.scss';

type Props = {
  children?: React.ReactNode
  list: {
    url: string
    text: string
  }[]
};

const Dropdown: React.FC<Props & React.HTMLAttributes<HTMLElement>> = (props: Props) => {
  const { buttonProps, isOpen } = useDropdownMenu(2);

  return (
    <div>
      <button type="button" {...buttonProps} className={dropdown__toggle}>
        Dance
      </button>
      <div className={isOpen ? visible : hidden} role='menu'>
        {props.list.map(item => {
          return (
            <>
              <Link
                to={item.url}
                role="menuitem"
                className={dropdown__link}
              >
                {item.text}
              </Link>
              <br />
            </>
          )
        })}
      </div>
    </div>
  );
};

export default Dropdown;
